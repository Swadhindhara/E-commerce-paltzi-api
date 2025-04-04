import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom"
import { Header } from "./_components"
import Layout from "./Layout"
import { Home, Login, NotFound, Register, Products, Profile, Product } from "./pages"
import { useSelector } from "react-redux"

function App() {
  const {isAuthenticated} = useSelector((state) => state.auth)
  
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/products/:slug" element={<Product />} />
        <Route path="/products" element={<PrivateRoute><Products /></PrivateRoute>}/>
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>}/>
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
