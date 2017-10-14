import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Join from './components/Join';
import Room from './components/Room';

const Base = () => (
  <Router>
    <div>
      <Route exact path='/' component={Join} />
      <Route path='/room/:roomId' component={Room} />
    </div>
  </Router>
);

ReactDOM.render(
  <Base />,
  document.getElementById('react-entry')
);
