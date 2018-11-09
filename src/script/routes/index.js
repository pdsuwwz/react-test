import { BrowserRouter as Router, Route } from 'react-router-dom';
import Hello from '../components/react-001'
import HealthCheck from '../components/HealthCheck'

module.exports = (
  <Router>
    <div>
      <Route path="/hello" component={Hello} />
      <Route path="/healthCheck" component={HealthCheck} />
    </div>
  </Router>
);

