import { motion } from 'framer-motion';
import Header from '../components/common/Header.jsx';

import OverviewCards from '../components/analytics/OverviewCards.jsx';

const AnalyticsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Analytics' />

      <main className='max-w-7xl px-6 py-4 mx-auto lg:px-8'>
        <OverviewCards />
      </main>
    </div>
  );
};

export default AnalyticsPage;
