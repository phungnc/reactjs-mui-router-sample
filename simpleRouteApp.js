import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

const Page1 = () => (
  <div>Page 1</div>
);

const Page2 = () => (
  <div>Page 2</div>
);

const Page3 = () => (
  <div>Page 3</div>
);

const App = () => (
  <Router history={hashHistory}>
    <Route path="page-1" component={Page1} />
    <Route path="page-2" component={Page2} />
    <Route path="page-3" component={Page3} />
  </Router>
)

ReactDOM.render(<App />,document.getElementById('app'));