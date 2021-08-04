import './App.css';
import TestingLocations from "./components/testing-locations/index"

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navigation from './components/Navigation';
import Dashboard from './components/dashboard/index';
import Symptoms from './components/symptoms/Symptoms';

function App() {
  return (
    <div className="App">
      <h1>CoviHelp App</h1>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/symptoms" component={Symptoms}/>
          <Route path="/testing_locations" component={TestingLocations} />
          <Route path="/dashboard" component={TestingLocations} />
          <Route path="/">
            <Dashboard />  
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
