import React from 'react';
import { Link } from 'react-router-dom';
import MicIcon from '@mui/icons-material/Mic';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Styles/header.css';

function Header() {
  return (
    <nav>
      <div className="link">
        <Link to="/">
          <ArrowBackIcon />
        </Link>
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
