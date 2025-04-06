import axios from "axios";
import { toast } from "sonner";

const API_URL = import.meta.env.VITE_BASE_URL;

const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/login`, userData);
  console.log(response.data);
  return response.data;
};

const logout = () => {
  localStorage.removeItem("token");
  toast.success("Logout Successfully!!!");
};

const createProfile = async (profileData) => {
  const response = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/users`,
    profileData
  );
  console.log(response.data, "from createProfile");
  return response.data;
};

const authAPI = { loginUser, logout, createProfile };

export default authAPI;
