import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom"
import { Header } from "./_components"
import Layout from "./Layout"
import { Home, Login, NotFound, Register } from "./pages"
import Products from "./pages/Products"
import { useSelector } from "react-redux"

function App() {

  const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token')
    return token ? children : <Navigate to="/login" />;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/products" element={<PrivateRoute><Products /></PrivateRoute>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
