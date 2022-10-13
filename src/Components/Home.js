/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Team from './Team';

function Home({ leagues }) {
  const { leagueList } = leagues;
  const [teamsList, setTeamsList] = useState(leagueList.filter((item) => item.id === '423e4faa-4c4b-4cf2-b1e9-03e8e5cace1f')[0].teams);

  const chooseLeague = (id) => {
    setTeamsList(() => leagueList.filter((item) => item.id === id)[0].teams);
  };

  return (
    <section>
      <div className="navigator">
        {leagueList.map((item) => (
          <button key="item.id" type="button" onClick={() => { chooseLeague(item.id); }}>
            <img src={item.logo} style={{ width: '50px', height: '60px' }} alt="League logo" />
            <h6>{item.name}</h6>
            <p>{item.country}</p>
          </button>
        ))}
      </div>
      <p className="identifier">TEAMS</p>
      <div className="teams">
        {teamsList.map((team) => (
          <Team key={team.id} team={team} />
        ))}
      </div>
    </section>
  );
}

export default Home;
