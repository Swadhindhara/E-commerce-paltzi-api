import axios from "axios";

const getAllProducts = async(filter = {}) => {
    const queryParams = new URLSearchParams(filter).toString();
    const url = queryParams ? `${import.meta.env.VITE_BASE_URL}/products/?${queryParams}` : `${import.meta.env.VITE_BASE_URL}/products`
    const response = await axios.get(url);
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