import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { recieveLeagues } from './Redux/teams';
import Header from './Components/Header';
import Home from './Components/Home';
import Info from './Components/Info';
import './App.css';

function App() {
  const leagueList = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => async () => {
    dispatch(recieveLeagues());
  }, []);

  return (
    <div>
      <Header />
      <main>
        {leagueList.length ? (
          <Routes>
            <Route path="/" element={<Home leagues={leagueList} />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        ) : ''}
      </main>
    </div>
  );
}

export default App;
