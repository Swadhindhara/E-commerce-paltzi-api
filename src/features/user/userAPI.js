import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL;

const getProfile = async () => {
  const token = localStorage.getItem("token");
  const parsedToken = JSON.parse(token)
  const response = await axios.get(`https://api.escuelajs.co/api/v1/auth/profile`, {
    headers: {
      Authorization: `Bearer ${parsedToken.access_token}`,
    },
  });

  console.log(response.data);
  
  return response.data;
};

const userAPI = { getProfile };
export default userAPI;
