import axios from 'axios';

// Action types
const READ = 'football/teams/READ';

const baseURL = 'https://football-apis.herokuapp.com/api/v1/leagues';

// Action creators
export const read = (teams) => ({
  type: READ,
  payload: teams,
});

// Reducer
const teamsReducer = (state = [], action) => {
  switch (action.type) {
    case READ:
      return action.payload;
    default:
      return state;
  }
};

export const recieveLeagues = () => async (dispatch) => {
  let leagues;
  await axios.get(baseURL)
    .then((response) => {
      leagues = response.data.leagues;
      dispatch(read(leagues));
    });
};

export default teamsReducer;
