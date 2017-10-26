import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Map from '../containers/map';


const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Map} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
