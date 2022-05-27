import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav className="d-flex flex-row gap-2 justify-content-center">
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to="me"
        >
          Il mio profilo
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to="/profile/2"
        >
          Profilo 2
        </NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
