import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from 'moment';

const FinancialChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://mmi-backend-123.vercel.app/api/mmi');
        const formattedData = response.data.data.map(item => ({
          value: parseFloat(item.value),
          // Format the timestamp to 12-hour format with AM/PM
          timestamp: moment(item.timestamp).format('YYYY-MM-DD hh:mm:ss A')
        }));
        setChartData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-full mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">Financial Data Chart</h2>
      <div className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="timestamp" />
            <YAxis dataKey="value" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={3} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinancialChart;
