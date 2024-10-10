import Header from '../components/common/Header.jsx';
import ConnectedAccounts from '../components/settings/ConnectedAccounts.jsx';
import DangerZone from '../components/settings/DangerZone.jsx';
import Notifications from '../components/settings/Notifications.jsx';
import Profile from '../components/settings/Profile.jsx';
import Security from '../components/settings/Security.jsx';

const SettingsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10 border-gray-900'>
      <Header title='Settings' />
      <main className='max-w-4xl mx-auto px-6 py-4 lg:px-8'>
        <Profile />
        <Notifications />
        <Security />
        <ConnectedAccounts />
        <DangerZone />
      </main>
    </div>
  );
};

export default SettingsPage;
