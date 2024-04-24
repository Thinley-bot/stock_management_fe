import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ShowMessage from '../components/ui/showmessage';
import MUIDataTable from "mui-datatables";
import ProductService from '../service/ProductService'
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  const [showMessageBool, setShowMessageBool] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  let messageType = "error";
  let message = "";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const allProducts = await ProductService.getAllProducts();
      console.log(allProducts)
      setProducts(allProducts.map((product, index) => ({ ...product, id: index + 1 })));
    } catch (error) {
      setShowMessageBool(true);
      messageType = "error";
      message = "Failed to fetch products.";
    }
  };
  
  const deleteProduct = async (productId) => {
    try {
      await ProductService.deleteProductById(productId);
      fetchProducts();
    } catch (error) {
      setShowMessageBool(true);
      messageType = "error";
      message = "Failed to delete product.";
    }
  };
  
  const updateProduct = async () => {
    try {
      await ProductService.updateProduct(selectedProduct.productId, selectedProduct);
      fetchProducts();
      setSelectedProduct(null);

    } catch (error) {
      setShowMessageBool(true);
      messageType = "error";
      message = "Failed to update product.";
    }
  };
  

  const columns = [
    { name: 'id', label: 'ID', options: { display: false } },
    "productId",
    "productName",
    "productCategory",
    "price",
    "imageFileName",
    {
      name: 'Actions',
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          const product = products.find(p => p.id === tableMeta.rowData[0]);
          return (
  
            <div className='flex flex-row gap-2 justify-center items-center text-white'>

              <button onClick={() => setSelectedProduct(product)} className='bg-green-400 p-3 rounded-lg gap-2 '>Update</button>
              <button onClick={() => deleteProduct(product.productId)} className='bg-red-400 p-3 rounded-lg gap-2 '>Delete</button>

            </div>
          );
        },
      },
    }
  ];

  return (
    <Layout>
      {showMessageBool ? <ShowMessage messageType={messageType} message={message} /> : null}
      <div className='p-5'>
        <div className='flex flex-row justify-between items-center'>
          <h1 className='text-sm font-medium'>Dashboard/Product</h1>
          <Link to="/products/add">
            <button type="button" className="text-white bg-gradient-to-br from-gray-800 to-blue-800 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-4 py-2 text-center">Add Product</button>
          </Link>
        </div>
        <br />
        <MUIDataTable
          title={"Products"}
          data={products}
          columns={columns}
        />
        {selectedProduct && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Update Product</h2>
              <form onSubmit={() => updateProduct(selectedProduct.productId)}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
                    Product Name:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value={selectedProduct.productName}
                    onChange={(e) => setSelectedProduct({ ...selectedProduct, productName: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productCategory">
                    Product Category:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value={selectedProduct.productCategory}
                    onChange={(e) => setSelectedProduct({ ...selectedProduct, productCategory: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                    Price:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    value={selectedProduct.price}
                    onChange={(e) => setSelectedProduct({ ...selectedProduct, price: e.target.value })}
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Update Product
                  </button>
                  <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => setSelectedProduct(null)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Products;
