import { Sidebar } from 'flowbite-react';
import { HiUser, HiArrowSmRight, HiDocumentText, HiOutlineUserGroup, HiChartPie } from 'react-icons/hi';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signoutSuccess } from '../../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function DashSidebar() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [tab, setTab] = useState('');
  
  const handleSignout = async () => {
    try {
      const res = await fetch('/api/users/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup className='flex flex-col gap-1'>
        {currentUser && currentUser.isAdmin && (
            <Link to='/dashboard?tab=dash'>
              <Sidebar.Item
                active={tab === 'dash' || !tab}
                icon={HiChartPie}
                as='div'
              >
                Dashboard
              </Sidebar.Item>
            </Link>
          )}
          <Link to='/dashboard?tab=profile'>
            <Sidebar.Item
              active={tab === 'profile'}
              icon={HiUser}
              label={currentUser.isAdmin ? 'Admin' : 'User'}
              labelColor='dark'
              as='div'
            >
              Profile
            </Sidebar.Item>
          </Link>

          {/* <Link to='/dashboard?tab=my-appointments'>
            <Sidebar.Item
              active={tab === 'my-appointments'}
              icon={HiUser}
              labelColor='dark'
              as='div'
            >
              My Appointments
            </Sidebar.Item>
          </Link> */}

          {currentUser.isAdmin ? (
            <Link to='/dashboard?tab=all-appointments'>
              <Sidebar.Item
                active={tab === 'users'}
                icon={HiOutlineUserGroup}
                as='div'
              >
                All Appointments
              </Sidebar.Item>
            </Link>
          ): (
            <Link to='/dashboard?tab=my-appointments'>
            <Sidebar.Item
              active={tab === 'my-appointments'}
              icon={HiUser}
              labelColor='dark'
              as='div'
            >
              My Appointments
            </Sidebar.Item>
          </Link>
          )
        }

          {currentUser.isAdmin && (
            <Link to='/dashboard?tab=users'>
              <Sidebar.Item
                active={tab === 'users'}
                icon={HiOutlineUserGroup}
                as='div'
              >
                Users
              </Sidebar.Item>
            </Link>
          )}

          <Sidebar.Item
            icon={HiArrowSmRight}
            className='cursor-pointer'
            onClick={handleSignout}
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}