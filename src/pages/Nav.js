import React from 'react';
import img from '../pic/nib_logo2.png'

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-base-300 p-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            
          </div>
          <img src={img} className="btn btn-ghost normal-case text-xl"></img>
        </div>
        
        <div className="navbar-end">
          <a href='#home' className="btn">File a case Today</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;