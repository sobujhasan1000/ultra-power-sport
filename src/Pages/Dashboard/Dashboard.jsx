import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Customhooks/Admin/useAdmin';
import useInstructor from '../../Customhooks/Instructor/useInstructor';
import { FaBook, FaBookOpen, FaBookmark, FaCheck, FaHome, FaHouseUser, FaPlusCircle, FaUsers, FaWallet } from 'react-icons/fa';





// const isAdmin=true;
// const [isAdmin]=useAdmin();
const Dashboard = () => {
  const [isAdmin]=useAdmin();
  const[isInstructor]=useInstructor();
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
        isAdmin?(<>
        <li><Link to='/'><FaHome />Home</Link></li>
        <li><Link to='/dashboard/dashboardhome' > <FaHouseUser />Admin Home</Link></li>
        <li><Link to='/dashboard/manageclasses'> <FaCheck /> Manage Classes</Link></li>
        <li><Link to='/dashboard/manageusers'><FaUsers/>Manage Users</Link></li>
        </>)
        :isInstructor?(<>
        <li><Link to='/'><FaHome /> Home</Link></li>
        <li><Link to='/dashboard/dashboardhome'  > <FaHouseUser />Instractor Home</Link></li>
        <li><Link to='/dashboard/addclasses'> <FaPlusCircle />Add  Classes</Link></li>
        <li><Link to='/dashboard/myclasses'><FaBook/>My Classes</Link></li>
        </>)
        :<>
        <li><Link to='/'><FaHome /> Home</Link></li>
      <li><Link to='/dashboard/dashboardhome' ><FaHouseUser />Student Home</Link></li>
      <li><Link to='/dashboard/selectedClass'> <FaBookmark/>My Selected Class</Link></li>
      <li><Link to='/dashboard/enroledClass'><FaBookOpen/>My Enroled Class</Link></li>
      <li><Link to='/dashboard/paymentHistroy'><FaWallet/>Payment Histroy</Link></li>
        </>
      }
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;