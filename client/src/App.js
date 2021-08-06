import './App.css';


import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navigation from './components/Navigation';
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
          <Route path="/symptoms" component={Symptoms} />
          <Route path="/" component={Covid19} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
