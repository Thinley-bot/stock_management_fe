import { Bar } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'; // Import necessary components from Chart.js
import StockService from '../../service/StockService';

// Register necessary components from Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function Barchart() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      const allStocks = await StockService.getAllStocks();
      setStocks(allStocks);
      console.log(allStocks)
    } catch (error) {
      console.error('Error fetching stocks:', error);
    }
  };

  const calculateProductQuantities = () => {
    const productQuantities = {};

    stocks.forEach((stock) => {
      const { product, quantity } = stock;
      const productName = product.productName; 
      if (productName in productQuantities) {
        productQuantities[productName] += quantity;
      } else {
        productQuantities[productName] = quantity;
      }
    });

    console.log(productQuantities)

    return productQuantities;
  };

  const getProductLabels = () => Object.keys(calculateProductQuantities());

  const getProductQuantities = () => Object.values(calculateProductQuantities());

  const data = {
    labels: getProductLabels(),
    datasets: [
      {
        label: 'Product Quantity',
        data: getProductQuantities(),
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Adjust color if needed
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category', // Ensure x-axis scale type is set to 'category'
        labels: getProductLabels(),
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'BarChart',
      },
    },
  };

  return (
    <div className="h-full w-3/4 bg-white border-2 border-gray-200 rounded-md">
      <Bar options={options} data={data} />
    </div>
  );
}
