import React from 'react';
import { Link } from 'react-router-dom';
import MicIcon from '@mui/icons-material/Mic';
import SettingsIcon from '@mui/icons-material/Settings';
import './Styles/header.css';

function Header() {
  return (
    <nav>
      <div className="link">
        <Link to="/Football-Capstone">&lt;</Link>
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
