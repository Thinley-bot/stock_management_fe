import React, { useState, useEffect } from "react";
import StockService from "../service/StockService";
import Layout from "../components/Layout";
import ProductService from "../service/ProductService";

function AddStock() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const allProducts = await ProductService.getAllProducts();
      setProducts(allProducts);
      console.log(allProducts);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  const handleAddStock = async (e) => {
    e.preventDefault();

    try {
      const newStock = {
        product: selectedProduct, 
        quantity,
        unit,
        price: parseFloat(price),
        lastUpdated: new Date().toISOString(), 
      };
      console.log(selectedProduct);
      console.log(newStock);

      await StockService.addStock(newStock);
      setQuantity("");
      setUnit("");
      setPrice("");
      setSelectedProduct(null);
      alert("Stock added successfully!");
    } catch (error) {
      console.error("Error adding stock:", error.message);
      alert("Failed to add stock. Please try again.");
    }
  };

  return (
    <Layout>
      <div className="h-[700px] flex items-center justify-center">
        <form
          onSubmit={handleAddStock}
          className="bg-gray-400 bg-opacity-10 shadow-md rounded px-20 pt-20 pb-20 w-[50%]"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="productName"
            >
              Product Name:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="productName"
              value={selectedProduct ? selectedProduct.productId : ""}
              onChange={(e) => {
                const selectedProductId = e.target.value;
                const product = products.find(
                  (product) => product.productId === parseInt(selectedProductId)
                );
                setSelectedProduct(product); // Set selected product object
              }}
              required
            >
              <option value="">Select Product</option>
              {products.map((product) => (
                <option key={product.productId} value={product.productId}>
                  {product.productName}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="quantity"
            >
              Quantity:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="quantity"
              type="text"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="unit"
            >
              Unit:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="unit"
              type="text"
              placeholder="Unit"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Stock
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default AddStock;
