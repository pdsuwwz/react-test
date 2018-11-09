import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HealthCheck from '../components/healthCheck'
module.exports = (
  <Router>
    <div>
      <Route path="/healthCheck" component={HealthCheck} />
    </div>
  </Router>
);

