import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handelLogOut = () => {
    logOut()
      .then(() => { })
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your logOut successful',
        showConfirmButton: false,
        timer: 1500
      })
      .catch(error => console.log(error));
  }
  return (
    <div className="navbar bg-sky-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/allinstractor'>Instructors</Link></li>
          <li><Link to='/classes'>Classes</Link></li>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">UltraPower<br /><small className='text-sm'>sport academy</small></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/allinstractor'>Instructors</Link></li>
          <li><Link to='/classes'>Classes</Link></li>
        </ul>
      </div>
      {
        user ?
          <>
            <div className="navbar-end">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li><Link to='/dashboard'>Dashboard</Link></li>
                  <li onClick={handelLogOut}><a>Logout</a></li>
                </ul>
              </div>
            </div>
          </>
          :
          <>
            <ul className="menu menu-horizontal px-1">
            <li><Link to='/logIn'>Login</Link></li>
            </ul>
          </>
      }

    </div>
  );
};

export default NavBar;

