import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const API_URL = import.meta.env.VITE_BASE_URL

const loginUser = async(userData) => {
    const response = await axios.post(`${API_URL}/auth/login`, userData);
    console.log(response.data);
    return response.data;
}

const logout = () => {
    localStorage.removeItem('token');
    toast.success("Logout Successfully!!!")

}

const authAPI = {loginUser, logout}

export default authAPI;