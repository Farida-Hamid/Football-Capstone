/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './Styles/team.css';

function Team({ team }) {
  return (
    <Link className="team" to="/info" state={{ team }}>
      <img src={team.logo} alt="League logo" />
      <div className="teamInfo">
        <h2 className="name">{team.name}</h2>
        <p className="city">{team.city}</p>
      </div>
    </Link>
  );
}

export default Team;
