import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL;

const login = async(userData) => {
    const response = await axios.post(`${API_URL}/auth/login`, userData);
    return response.data;
}

const logout = () => {
    localStorage.removeItem('token');
}


const authAPI = {login, logout};
export default authAPI;