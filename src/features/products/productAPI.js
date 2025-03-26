import axios from "axios";

const getAllProducts = async() => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`);
    return response.data;
    
}

const getSingleProduct = async(slug) => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products/slug/${slug}`);
    return response.data;
}


const getByCategory = async(slug) => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products/?categorySlug=${slug}`);
    return response.data;
}


const productAPI = { getAllProducts, getSingleProduct, getByCategory };

export default productAPI;