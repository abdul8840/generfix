import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSidebar from '../components/Dsahboard/DashSidebar';
import DashProfile from '../components/Dsahboard/DashProfile';
import DashMyAppointments from '../components/Dsahboard/DashMyAppointments';
import DashUsers from '../components/Dsahboard/DashUsers';
import DashAllAppointment from '../components/Dsahboard/DashAllAppointment';


export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className='md:w-56'>
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* profile... */}
      {tab === 'profile' && <DashProfile />}
      {/* MyAppointments... */}
      {tab === 'my-appointments' && <DashMyAppointments />}
      {/* allAppointments... */}
      {tab === 'all-appointments' && <DashAllAppointment />}
      {/* users */}
      {tab === 'users' && <DashUsers />}
    </div>
  );
}