import axios from "axios";

const getAllProducts = async() => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`);
    console.log(response.data);
    return response.data;
    
}


const productAPI = { getAllProducts };

export default productAPI;