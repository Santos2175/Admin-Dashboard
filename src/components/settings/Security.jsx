import { useState } from 'react';
import SettingSection from './SettingSection.jsx';
import ToggleSwitch from './ToggleSwitch.jsx';
import { Lock } from 'lucide-react';

const Security = () => {
  const [twoFactor, setTwoFactor] = useState(false);
  return (
    <SettingSection icon={Lock} title={'Security'}>
      <ToggleSwitch
        label={'Two-Factor Authentication'}
        isOn={twoFactor}
        onToggle={() => setTwoFactor(!twoFactor)}
      />
      <div className='mt-4'>
        <button className='bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded font-bold  transition duration-200'>
          Change Password
        </button>
      </div>
    </SettingSection>
  );
};

export default Security;
