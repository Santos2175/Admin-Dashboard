import React from 'react';
import { motion } from 'framer-motion';
import { UsersIcon, UserCheck, UserPlus, UserX } from 'lucide-react';

import Header from '../components/common/Header.jsx';
import StatCard from '../components/common/StatCard.jsx';
import UsersTable from '../components/users/UsersTable.jsx';

import { userStats } from '../data/data.js';
import UserGrowthChart from '../components/users/UserGrowthChart.jsx';
import UserAcitivityHeatmap from '../components/users/UserAcitivityHeatmap.jsx';
import UserDemographicsChart from '../components/users/UserDemographicsChart.jsx';

const UsersPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Users' />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* STATS */}
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <StatCard
            name='Total Users'
            icon={UsersIcon}
            value={userStats.totalUsers.toLocaleString()}
            color='#6366F1'
          />
          <StatCard
            name='New Users Today'
            icon={UserPlus}
            value={userStats.newUsersToday.toLocaleString()}
            color='#10B981'
          />
          <StatCard
            name='Active Users'
            icon={UserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color='#F59E0B'
          />
          <StatCard
            name='Churn Rate'
            icon={UserX}
            value={userStats.churnRate.toLocaleString()}
            color='#EF4444'
          />
        </motion.div>

        <UsersTable />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <UserGrowthChart />
          <UserAcitivityHeatmap />
          <UserDemographicsChart />
        </div>
      </main>
    </div>
  );
};

export default UsersPage;
