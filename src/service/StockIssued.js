import axios from 'axios';

const BASE_URL = 'http://localhost:8080/stock-issued'; // Adjust the base URL as needed

const StockIssuedService = {
  addStockIssued: async (stockIssued) => {
    try {
      const response = await axios.post(`${BASE_URL}/add`, stockIssued);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getAllStockIssued: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/all`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getStockIssuedById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateStockIssued: async (stockIssued) => {
    try {
      const response = await axios.put(`${BASE_URL}/update`, stockIssued);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteStockIssuedById: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/delete/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default StockIssuedService;
