import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const ProductService = {
  addProduct: async (product) => {
    try {
      const response = await axios.post(`${BASE_URL}/products`, product);
      return response.data;
    } catch (error) {
      throw new Error(`Error adding product: ${error.message}`);
    }
  },

  getAllProducts: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching all products: ${error.message}`);
    }
  },

  getProductById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/products/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching product by ID: ${error.message}`);
    }
  },

  updateProduct: async (id, product) => {
    try {
      const response = await axios.put(`${BASE_URL}/products/update/${id}`, product);
      return response.data;
    } catch (error) {
      throw new Error(`Error updating product: ${error.message}`);
    }
  },

  deleteProductById: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/products/delete/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error deleting product by ID: ${error.message}`);
    }
  }
};

export default ProductService;
