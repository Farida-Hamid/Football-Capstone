import { useLocation } from 'react-router-dom';

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
      <h6>{team.city}</h6>
      <div className="bold">Founded in:</div>
      <h6>{team.founded}</h6>
      <div className="bold">About:</div>
      <p>{team.details}</p>
    </div>
  );
}

export default Info;
