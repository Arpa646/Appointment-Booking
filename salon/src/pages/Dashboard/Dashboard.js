import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
 import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
   const [user]=useAuthState(auth)
    const [admin]=useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content  ">
         {/* // Page content here  */}
         <h2 className='text-3xl font-bold text-purple-500'>Welcome to Your Dashboard</h2>
         <Outlet></Outlet>
         
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to='/dashboard'>MyAppointments</Link></li>
            <li><Link to='/dashboard/reviews'>Reviews</Link></li>
            
         {  admin && <>

          <li><Link to='/dashboard/users'>All Users</Link></li>
          <li><Link to='/dashboard/addSProduct'>Add service</Link></li>
          <li><Link to='/dashboard/manageExpert'>Manage service</Link></li>


         </>}
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;