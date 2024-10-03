import { motion } from 'framer-motion';
import Header from '../components/common/Header.jsx';

import OverviewCards from '../components/analytics/OverviewCards.jsx';
import RevenueChart from '../components/analytics/RevenueChart.jsx';
import ChannelPerformance from '../components/analytics/ChannelPerformance.jsx';
import ProductPerformance from '../components/analytics/ProductPerformance.jsx';
import UserRetention from '../components/analytics/UserRetention.jsx';
import CustomerSegmentation from '../components/analytics/CustomerSegmentation.jsx';

const AnalyticsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Analytics' />

      <main className='max-w-7xl px-6 py-4 mx-auto lg:px-8'>
        <OverviewCards />
        <RevenueChart />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          <ChannelPerformance />
          <ProductPerformance />
          <UserRetention />
          <CustomerSegmentation />
        </div>
      </main>
    </div>
  );
};

export default AnalyticsPage;
