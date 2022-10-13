/* eslint-disable no-undef */
import { Provider } from 'react-redux';
import store from '../Redux/store';
import { Routes, Route } from 'react-router-dom';
import App from '../App';

const ReactTestRenderer = require('react-test-renderer');

it('Testing the Home component:', () => {
  const tree = ReactTestRenderer.create(
    <Routes>
      <Route>

      <Provider store={store}>
      <App />
    </Provider>
      </Route>
    </Routes>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
