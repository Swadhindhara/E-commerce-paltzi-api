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

const updateProfile = async (id, userData) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/users/${id}`, userData);
        return response.data;
    } catch (error) {
        return error.message;
    }
}


const userAPI = { getProfile, updateProfile};

export default userAPI;
