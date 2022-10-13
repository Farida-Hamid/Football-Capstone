import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import MicIcon from '@mui/icons-material/Mic';
import SettingsIcon from '@mui/icons-material/Settings';

function Header() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/')[1];
  const back = '<';

  return (
    <nav>
      <div className="link">
        <NavLink to="/" className={splitLocation}>
          {back}
        </NavLink>
      </div>

      <div className="home">
        <h1>Football Leagues</h1>
      </div>

      <div>
        <MicIcon />
        <SettingsIcon />
      </div>
    </nav>
  );
}

export default Header;