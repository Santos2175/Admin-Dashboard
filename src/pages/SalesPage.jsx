import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, CreditCard, ShoppingCart, TrendingUp } from 'lucide-react';

import Header from '../components/common/Header.jsx';
import StatCard from '../components/common/StatCard.jsx';
import SalesOverviewChart from '../components/sales/SalesOverviewChart.jsx';
import SalesByCategoryChart from '../components/sales/SalesByCategoryChart.jsx';
import DailySalesTrend from '../components/sales/DailySalesTrend.jsx';

const salesStats = {
  totalRevenue: '$1,234,567',
  averageOrderValue: '$78.90',
  conversionRate: '3.45%',
  salesGrowth: '12.3%',
};

const SalesPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Sales' />
      <main className='max-w-7xl mx-auto px-6 py-4 lg:px-8'>
        {/* STATS */}
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <StatCard
            name='Total Revenue'
            icon={DollarSign}
            value={salesStats.totalRevenue}
            color='#6366F1'
          />
          <StatCard
            name='Avg Order Value'
            icon={ShoppingCart}
            value={salesStats.averageOrderValue}
            color='#10B981'
          />
          <StatCard
            name='Conversion Rate'
            icon={TrendingUp}
            value={salesStats.conversionRate}
            color='#F59E0B'
          />
          <StatCard
            name='Sales Growith'
            icon={CreditCard}
            value={salesStats.salesGrowth}
            color='#EF4444'
          />
        </motion.div>

        <SalesOverviewChart />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          <SalesByCategoryChart />
          <DailySalesTrend />
        </div>
      </main>
    </div>
  );
};

export default SalesPage;
