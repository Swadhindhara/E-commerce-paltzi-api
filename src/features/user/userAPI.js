import axios from "axios"
const getProfile = () => {
    const response = axios.get(`${import.meta.env.VITE_BASE_URL}/auth/profile`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
    console.log(response.data);
    return response.data()
}


const userAPI = { getProfile }

export default userAPI;