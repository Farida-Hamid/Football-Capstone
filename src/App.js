
import { recieveLeagues } from './Redux/teams';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const leagueList = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(leagueList);

  useEffect(() => async () => {
    await dispatch(recieveLeagues());
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
