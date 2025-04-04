import axios from "axios";

const getProfile = async () => {
    const token = JSON.parse(localStorage.getItem('token'));
    
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/auth/profile`, {
        headers: {
            Authorization: `Bearer ${token.access_token}`,
        },
    });

    console.log(response.data, "from api");

    return response.data;
};

const userAPI = { getProfile };

export default userAPI;
