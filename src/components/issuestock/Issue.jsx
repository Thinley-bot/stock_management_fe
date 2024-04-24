import React, { useEffect, useState } from 'react';
import Layout from '../Layout';
import ShowMessage from '../ui/showmessage';
import MUIDataTable from "mui-datatables";
import StockIssuedService from '../../service/StockIssued'


const columns = [
    {
      name: 'id',
      label: 'ID',
      options: {
        display: false,
      },
    },
    {
      name: 'stock.product.productName', 
      label: 'Product Name',
    },
    {
      name: 'stock.product.productCategory', 
      label: 'Product Category',
    },
    "stock.quantity",
    "stock.unit",
    "stock.price",
    {
      name: 'stock.user.email', 
      label: 'Issued By',
    },
    // {
    //   name: 'Actions',
    //   options: {
    //     customBodyRender: (value, tableMeta, updateValue) => {
    //       return (
    //         <button onClick={() => deleteStocks(tableMeta.rowData[0])}>Delete</button>
    //       );
    //     },
    //   },
    // }
  ];

const StockIssue = () => {
  const [data, setData] = useState([]);
  const [showError, setShowError] = useState(false);
  const [errorType, setErrorType] = useState("error");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const stockIssuedData = await StockIssuedService.getAllStockIssued();
      console.log(stockIssuedData)
      setData(stockIssuedData);
    } catch (error) {
      setShowError(true);
    }
  };

  const closeError = () => {
    setShowError(false);
  };

  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'vertical',
    enableNestedDataAccess: '.', // allows nested data separated by "." (see column names and the data structure above)
  };


  return (
    <Layout>
      {showError ? <ShowMessage messageType={errorType} message='' handleErrorClose={closeError}/> : <></>}
      <div className="flex flex-row bg-gray-100 h-screen">
        <div className='h-screen w-full overflow-y-auto'>
          <div className='bg-white p-5 overflow-y-auto'>
            <div className='flex flex-row justify-between'>
              <h1 className='text-2xl font-bold '></h1>
              <h1 className='text-sm font-medium'>Dashboard/stockissue</h1>
            </div>
            <br />
            <MUIDataTable
              title={"Highlights"}
              data={data}
              columns={columns}
              options={options}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StockIssue;
