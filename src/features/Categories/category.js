import axios from "axios"

const API_URL = import.meta.env.VITE_BASE_URL

const getCategories = async() => {
    const response = await axios.get(`${API_URL}/categories`);    
    return response.data;
}


const categoryAPI = {getCategories};
export default categoryAPI;