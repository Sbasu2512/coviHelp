import './App.css';
import TestingLocations from "./components/testing-locations/index"

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navigation from './components/Navigation';
import Dashboard from './components/dashboard/index';
import Symptoms from './components/symptoms/Symptoms';
import Home from './components/symptoms/Home';
import covid19 from './components/covid19/index.jsx'

function App() {
  return (
    <div className="App">
      <h1>CoviHelp</h1>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/">
          <Route path="/vaccine" component={TestingLocations} />
          <Route path="/covid19" component={covid19} />
          <Route path="/social" component={Symptoms}/>
          <Route path="/dashboard" component={TestingLocations} />
          <Dashboard />  
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
