/* eslint-disable import/no-extraneous-dependencies */
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

// export const recieveLeagues = () => async (dispatch) => {
//   await fetch(baseURL)
//     .then((res) => res.json())
//     .then((leagues) => {
//       const leagList = leagues.leagues;
//       dispatch(read(leagList));
//       return leagList;
//     });
// };
export const recieveLeagues = () => async (dispatch) => {
  await axios.get(baseURL)
    .then((res) => {
      console.log(res.data.leagues);
      dispatch(read(res.data.leagues));
      return res.data.leagues;
    });
};
export default teamsReducer;
