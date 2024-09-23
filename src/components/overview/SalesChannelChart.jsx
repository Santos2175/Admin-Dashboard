import React from 'react';
import { motion } from 'framer-motion';
import { CHANNEL_COLORS, SALES_CHANNEL_DATA } from '../../data/data.js';
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Cell,
} from 'recharts';

const SalesChannelChart = () => {
  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 rounded-xl shadow-lg p-6 backdrop-blur-md lg:col-span-2 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}>
      <h2 className='text-lg font-medium text-gray-100 mb-4'>
        Sales by Channel
      </h2>
      <div className='h-80'>
        <ResponsiveContainer>
          <BarChart data={SALES_CHANNEL_DATA}>
            <CartesianGrid strokeDasharray={'3 3'} stroke='#4B5563' />
            <XAxis dataKey={'name'} stroke='#9CA3AF' />
            <YAxis stroke='#9CA3AF' />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4B5563',
              }}
              itemStyle={{ color: '#E5E7EB' }}
            />
            <Legend />
            <Bar dataKey={'value'} fill='#8884d8'>
              {CHANNEL_COLORS.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={CHANNEL_COLORS[index % CHANNEL_COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesChannelChart;
