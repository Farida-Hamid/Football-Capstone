/* eslint-disable no-undef */
import { Provider } from 'react-redux';
import store from '../Redux/store';
import {BrowserRouter as Router} from 'react-router-dom';
import App from '../App';

const ReactTestRenderer = require('react-test-renderer');

it('Testing the Home component:', () => {
  const tree = ReactTestRenderer.create(
    <Router>
      <Provider store={store}>
      <App />
      </Provider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
