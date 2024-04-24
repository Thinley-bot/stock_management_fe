// import React, { useEffect, useState } from 'react';
// import Layout from '../components/Layout';
// import ShowMessage from '../components/ui/showmessage';
// import MUIDataTable from "mui-datatables";
// import { Link } from 'react-router-dom';
// import StockService from '../service/StockService';

// function Stocks() {
//   const [stocks, setStocks] = useState([]);
//   const [showMessageBool, setShowMessageBool] = useState(false);
//   const [loading, setLoading] = useState(true); // Add loading state

//   useEffect(() => {
//     fetchStocks();
//   }, []);

//   const fetchStocks = async () => {
//     try {
//       setLoading(true);
//       const allStocks = await StockService.getAllStocks();
//       setStocks(allStocks);
//       console.log(stocks);
//       setLoading(false);
//     } catch (error) {
//       setShowMessageBool(true);
//       setLoading(false);
//     }
//   };

//   const deleteStocks = async (stockId) => {
//     try {
//       await StockService.deleteStockById(stockId);
//       fetchStocks(); 
//     } catch (error) {
//       setShowMessageBool(true);
//     }
//   };

//   const columns = [
//     {
//       name: 'id',
//       label: 'ID',
//       options: {
//         display: false,
//       },
//     },
//     {
//       name: 'product.productName', 
//       label: 'Product Name',
//     },
//     {
//       name: 'product.productCategory', 
//       label: 'Product Category',
//     },
//     "quantity",
//     "unit",
//     "price",
//     {
//       name: 'user.email', 
//       label: 'Added By',
//     },
//     {
//       name: 'Actions',
//       options: {
//         customBodyRender: (value, tableMeta, updateValue) => {
//           const stock= stocks.find(p => p.id === tableMeta.rowData[0]);
//           return (
//             <div className='flex flex-row gap-2 justify-center items-center text-white'>
//             <button className='bg-green-400 p-3 rounded-lg gap-2 '>Update</button>
//             <button onClick={() => deleteStocks(stock.stockId)} className='bg-red-400 p-3 rounded-lg gap-2 '>Delete</button>
//           </div>
//           );
//         },
//       },
//     }
//   ];
//   const options = {
//     filter: true,
//     filterType: 'dropdown',
//     responsive: 'vertical',
//     enableNestedDataAccess: '.',
//   };

//   return (
//     <Layout>
//       {showMessageBool ? <ShowMessage messageType="error" message="Failed to fetch stocks." /> : null}
//       <div className=' p-5'>
//         <div className='flex flex-row justify-between items-center'>
//         <h1 className='text-sm font-medium'>Dashboard/stock</h1>
//           <Link to="/stock/addstock">
//             <button type="button" className="text-white bg-gradient-to-br from-gray-800 to-blue-800 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-4 py-2 text-center">Add Stock
//             </button>
//           </Link>
//         </div>
//         <br />
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <MUIDataTable
//             title={"Products"}
//             data={stocks}
//             columns={columns}
//             options={options}
//           />
//         )}
//       </div>
//     </Layout>
//   );
// }

// export default Stocks;

import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ShowMessage from '../components/ui/showmessage';
import MUIDataTable from "mui-datatables";
import { Link } from 'react-router-dom';
import StockService from '../service/StockService';

function Stocks() {
  const [stocks, setStocks] = useState([]);
  const [showMessageBool, setShowMessageBool] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedStock, setSelectedStock] = useState(null); // Selected stock for update
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      setLoading(true);
      const allStocks = await StockService.getAllStocks();
      setStocks(allStocks);
      setLoading(false);
    } catch (error) {
      setShowMessageBool(true);
      setLoading(false);
    }
  };

  const deleteStock = async (stockId) => {
    try {
      await StockService.deleteStockById(stockId);
      fetchStocks();
    } catch (error) {
      setShowMessageBool(true);
    }
  };

  const updateStock = async () => {
    try {
      await StockService.updateStock(selectedStock.id, {
        quantity,
        unit,
        price: parseFloat(price)
      });
      fetchStocks();
      setSelectedStock(null);
      setQuantity('');
      setUnit('');
      setPrice('');
    } catch (error) {
      setShowMessageBool(true);
    }
  };

  const columns = [
    { name: 'id', label: 'ID', options: { display: false } },
    { name: 'product.productName', label: 'Product Name' },
    { name: 'product.productCategory', label: 'Product Category' },
    "quantity",
    "unit",
    "price",
    {
      name: 'user.email', label: 'Added By'
    },
    {
      name: 'Actions',
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          const stock = stocks.find(s => s.id === tableMeta.rowData[0]);
          return (
            <div className='flex flex-row gap-2 justify-center items-center text-white'>
              <button onClick={() => setSelectedStock(stock)} className='bg-green-400 p-3 rounded-lg gap-2'>Update</button>
              <button onClick={() => deleteStock(stock.stockId)} className='bg-red-400 p-3 rounded-lg gap-2'>Delete</button>
            </div>
          );
        },
      },
    }
  ];

  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'vertical',
    enableNestedDataAccess: '.',
  };

  return (
    <Layout>
      {showMessageBool ? <ShowMessage messageType="error" message="Failed to fetch stocks." /> : null}
      <div className='p-5'>
        <div className='flex flex-row justify-between items-center'>
          <h1 className='text-sm font-medium'>Dashboard/Stock</h1>
          <Link to="/stock/addstock">
            <button type="button" className="text-white bg-gradient-to-br from-gray-800 to-blue-800 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-4 py-2 text-center">Add Stock</button>
          </Link>
        </div>
        <br />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <MUIDataTable
              title={"Products"}
              data={stocks}
              columns={columns}
              options={options}
            />
            {selectedStock && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
                <div className="bg-white p-8 rounded-lg">
                  <h2 className="text-xl font-semibold mb-4">Update Stock</h2>
                  <form onSubmit={updateStock}>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
                        Quantity:
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="unit">
                        Unit:
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
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
                        Update Stock
                      </button>
                      <button
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => setSelectedStock(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
}

export default Stocks;
