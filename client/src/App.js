import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { Container } from 'react-bootstrap';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navigation from './components/Navigation';
import Symptoms from './components/symptoms/Symptoms';
import Home from './components/home/index.jsx'



function App() {
  return (
    <div className="App">
        <Router>
          <section className="sidebar">
            <h1>CoviHelp</h1>
            <hr className="sidebar__separator sidebar--centered" />
            <span>Logged as <strong>user123</strong></span>
            <hr className="sidebar__separator sidebar--centered" />
            <nav className="sidebar__menu">
              <Navigation />
            </nav>
          </section>
          <Switch>
            <Route path="/symptoms" component={Symptoms} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>


    </div>
  );
}

export default App;
