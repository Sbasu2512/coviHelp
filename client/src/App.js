import './App.css';


import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navigation from './components/Navigation';
import Dashboard from './components/dashboard/index';
import Symptoms from './components/symptoms/Symptoms';
import Covid19 from './components/covid19/index.jsx'

function App() {
  return (
    <div className="App">
      <h1>CoviHelp</h1>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/covid19" component={Covid19} />
          <Route path="/social" component={Symptoms}/>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login">
            <p>Login here!!</p>
          </Route>
          <Route path="/home">
            <p>Welcome Guest</p>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
