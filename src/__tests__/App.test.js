import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import App from '../App';
import teamsReducer from '../Redux/teams';

const ReactTestRenderer = require('react-test-renderer');

// Mock store
const store = configureStore({
  reducer: teamsReducer,
});

it('Testing the App component:', () => {
  const tree = ReactTestRenderer.create(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

// Mock Redux store data
const sudoLeague = [{
  country: 'Portugal',
  id: '140cd7fb-0598-425d-8616-8efe12f0e5f3',
  logo: 'https://media.api-sports.io/football/leagues/94.png',
  name: 'Primeira Liga',
}];

const MockREAD = () => ({
  type: 'football/teams/READ', payload: sudoLeague,
});

describe('Test Redux store:', () => {
  it('Reducer returns state', () => {
    expect(store.getState()).toEqual([]);
  });

  it('Actions are dispatched', () => {
    act(() => {
      store.dispatch(MockREAD());
    });
    expect(store.getState()).toEqual(sudoLeague);
  });
});
