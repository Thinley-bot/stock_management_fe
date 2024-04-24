import React, { useState } from 'react';
import ProductService from '../service/ProductService';
import Layout from '../components/Layout';

function AddProduct() {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('productName', productName);
      formData.append('productCategory', productCategory);
      formData.append('price', parseFloat(price));
      formData.append('image', image);

      await ProductService.addProduct(formData);
      // Reset form fields after successful product addition
      setProductName('');
      setProductCategory('');
      setPrice('');
      setImage(null);
      alert('Product added successfully!');
    } catch (error) {
      console.error('Error adding product:', error.message);
      alert('Failed to add product. Please try again.');
    }
  };

  return (
    <Layout>
      <div className="h-[700px] flex items-center justify-center">
        <form onSubmit={handleAddProduct} className="bg-gray-600 bg-opacity-10 shadow-md rounded px-8 pt-6 pb-8 w-[50%]">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
              Product Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="productName"
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productCategory">
              Product Category:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="productCategory"
              type="text"
              placeholder="Product Category"
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
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
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
              Product Image:
            </label>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default AddProduct;
