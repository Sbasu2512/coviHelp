import './App.css';


import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navigation from './components/Navigation';
import Symptoms from './components/symptoms/Symptoms';
import Home from './components/home/index.jsx'



function App() {
  return (
    <div className="App">
      <h1>CoviHelp</h1>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/symptoms" component={Symptoms} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
