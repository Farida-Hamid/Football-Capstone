import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import teamsReducer from './teams';

const rootReducer = combineReducers({
  leagues: teamsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
