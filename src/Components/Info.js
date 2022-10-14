import { useLocation } from 'react-router-dom';
import './Styles/info.css';

function Info() {
  const location = useLocation();
  const { team } = location.state;

  return (
    <div className="information">
      <div className="center">
        <img src={team.logo} style={{ width: '150px' }} alt="League logo" />
        <h2>{team.name}</h2>
      </div>
      <div className="bold">City:</div>
      <p>{team.city}</p>
      <div className="bold">Founded in:</div>
      <p>{team.founded}</p>
      <div className="bold">About:</div>
      <p>{team.details}</p>
    </div>
  );
}

export default Info;
