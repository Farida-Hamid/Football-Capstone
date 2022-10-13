import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { recieveLeagues } from './Redux/teams';
import Header from './Components/Header';

function App() {
  const leagueList = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(leagueList);

  useEffect(() => async () => {
    dispatch(recieveLeagues());
  }, []);

  return (
    <div>
      <Header />
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
