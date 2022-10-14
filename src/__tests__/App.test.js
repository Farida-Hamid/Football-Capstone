import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import App from '../App';
import teamsReducer from '../Redux/teams';

const reducer = combineReducers({
  leagues: teamsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);
it('Testing the App component:', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
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
    expect(store.getState()).toEqual({ leagues: [] });
  });

  it('Actions are dispatched', () => {
    act(() => {
      store.dispatch(MockREAD());
    });
    expect(store.getState().leagues).toEqual(sudoLeague);
  });
});
