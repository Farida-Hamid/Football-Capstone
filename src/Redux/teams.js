/* eslint-disable no-unused-vars */

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
  await fetch(baseURL)
    .then((res) => res.json())
    .then((leagues) => {
      const leagList = leagues.leagues;
      dispatch(read(leagList));
      return leagList;
    });
};

export default teamsReducer;
