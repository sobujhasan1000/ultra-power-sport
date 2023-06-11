import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const isAdmin=true;
const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      {
        isAdmin?<>
        <li><Link to='/'>Home</Link></li>
        <li><Link >Admin Home</Link></li>
        <li><Link>Manage Classes</Link></li>
        <li><Link to='/dashboard/manageusers'>Manage Users</Link></li>
        </>
        :<>
        <li><Link to='/'>Home</Link></li>
      <li><Link to='/dashboard/selectedClass'>Selected Class</Link></li>
      <li><Link to='/dashboard/enroledClass'>Enroled Class</Link></li>
      <li><Link to='/dashboard/selectedClass'>Payment Histroy</Link></li>
        </>
      }
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;