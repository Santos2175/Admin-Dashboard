import React from 'react';
import Header from '../components/common/Header.jsx';
import { motion } from 'framer-motion';
import StatCard from '../components/common/StatCard.jsx';
import { BarChart2, ShoppingBag, Users, Zap } from 'lucide-react';
import SalesOverviewChart from '../components/overview/SalesOverviewChart.jsx';
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart.jsx';

const OverviewPage = () => {
  return (
    <div className='flex-1 overflow-auto z-10 relative'>
      <Header title='Overview' />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* STATS */}
        <motion.div
          className='grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <StatCard
            name='Total Sales'
            icon={Zap}
            value='$12,658'
            color='#6366F1'
          />
          <StatCard
            name='New Users'
            icon={Users}
            value='1,536'
            color='#8B5CF6'
          />
          <StatCard
            name='Total Products'
            icon={ShoppingBag}
            value='568'
            color='#EC4899'
          />
          <StatCard
            name='Conversion Rate'
            icon={BarChart2}
            value='12.67%'
            color='#10B981'
          />
        </motion.div>

        {/* CHARTS */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <SalesOverviewChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
