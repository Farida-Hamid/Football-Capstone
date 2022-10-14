import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { recieveLeagues } from './Redux/teams';
import Header from './Components/Header';
import Home from './Components/Home';
import Info from './Components/Info';
import './App.css';

function App() {
  const leagueList = useSelector((state) => state.leagues);
  const dispatch = useDispatch();

  const loader = async () => {
    dispatch(recieveLeagues());
  };

  if (leagueList.length === 0) {
    loader();
  }

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
