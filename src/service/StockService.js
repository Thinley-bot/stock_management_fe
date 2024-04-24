import axios from 'axios';

const BASE_URL = 'http://localhost:8080/stocks';

const StockService = {
  addStock: async (stock) => {
    try {
      const response = await axios.post(`${BASE_URL}/addstock`, stock);
      return response.data;
    } catch (error) {
      throw new Error(`Error adding stock: ${error.message}`);
    }
  },

  getAllStocks: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getallstock`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching all stocks: ${error.message}`);
    }
  },

  getStockById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching stock by ID: ${error.message}`);
    }
  },

  updateStock: async (id, stock) => {
    try {
      const response = await axios.put(`${BASE_URL}/updatestock/${id}`, stock);
      return response.data;
    } catch (error) {
      throw new Error(`Error updating stock: ${error.message}`);
    }
  },

  deleteStockById: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/deletestock/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error deleting stock by ID: ${error.message}`);
    }
  }
};

export default StockService;
