import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './nav.css'
import { signOut } from 'firebase/auth';
import { click } from '@testing-library/user-event/dist/click';
import k from './profile.png'
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  if (user) {
    console.log('user', user)
  }
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  }



  const profile = () => {
    console.log('click')
  }


  // const menu = ()  => {
  //   <>
  //     <li><Link to="/Home">Home</Link></li>
  //     <li><Link to="/About">about</Link></li>
  //     <li><Link to="/Appointment">Appointment</Link></li>
  //     <li><Link to="/reviews">reviews</Link></li>
  //     <li><Link to="/contact">contact U</Link></li>
  //     <li><Link to="/Login">Login</Link></li>
  //   </>
  // }
  // if(user)
  // {
  //     src =<div className='avatar'>
  //   <div className="w-12 rounded-full">
  //   <img src={user.photoURL} />
  //   </div>
  //   </div>

  // }

  return (
    <div class="navbar sticky bg">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
            {/* navbar */}
            <li><Link to="/">Home</Link></li>




            <li><Link to="/About">about</Link></li>
            <li><Link to="/Appointment">Appointment</Link></li>
            <li><Link to="/reviews">reviews</Link></li>
            <li><Link to="/contact">contact U</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li>{user ? <button class="btn btn-active btn-ghost" onClick={logout}>Sign Out</button> : <Link to="/Login">Login</Link>}</li>
            <li>  {user && <div className='avatar'>
              <div className="w-12 rounded-full">

                <img src={user.photoURL} />
              </div>
            </div>
            }

            </li>





          </ul>
        </div>



        {/* 

     for desktop view */}

        <a class="btn btn-ghost normal-case text-xl  x">Pinky Blush </a>


      </div>

      <div class="navbar-center hidden lg:flex content-evenly  " >
        <ul class="menu menu-horizontal p-0">
          {/* navbar */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Appointment">Appointment</Link></li>
          {/* <li><Link to="/reviews">reviews</Link></li> */}
          <li><Link to="/clientReview">Reviews</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          {
            user && <li><Link to="/dashboard">DashBoard</Link></li>
          }
          <li>{user ? <button class="btn btn-active btn-ghost" onClick={logout}>Sign Out</button> : <Link to="/Login">Login</Link>}</li>


        </ul>




        <div className="dropdown dropdown-end avatar2">
          <label tabIndex={0} className="btn btn-ghost rounded-btn">



            {user?.photoURL ? <div className='avatar'>
              <div className="w-12 rounded-full">

                <img src={user.photoURL} />
              </div>
            </div> : <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={k} />
              </div>
            </div>
            }


          </label>
          <div className='l  '>

            <ul tabIndex={0} className="menu dropdown-content  p-16 pr-16 shadow bg-base-300 rounded-box w-52 mt-4 mr-6">

              <h1 className='profile-name'>Profile</h1>
            
              {user?.photoURL ? <div className='avatar'>
              <div className="w-12 rounded-full">

                <img src={user.photoURL} />
              </div>
            </div> : <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={k} />
              </div>
            </div>
            }







              <div className="divider c"></div>
              <div className='cc'>
                <li><a className='na'>{user && user.displayName}</a></li>
                <li ><a className='ab' >{user && user.email}</a></li>
                {/* <button class="btn btn-active btn-ghost" onClick={logout}>Sign Out</button> */}
              </div>
            </ul>
          </div>
        </div>


















      </div>




    </div>
  );
};

export default Navbar;
