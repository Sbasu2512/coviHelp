import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import logo from './images/coronavirus.png'

import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import Navigation from './components/sidebar/Navigation';
import Symptoms from './components/main/symptoms/Symptoms';
import Home from './components/main/index.jsx'
import User from './components/sidebar/user/index.jsx'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
        <Router>
            <aside className="sidebar">
              <img src={logo} alt='logo' className='logo'/>
              <h1><Link to="/" className="homeLink"><FontAwesomeIcon icon={faHome} /></Link> CoviHelp</h1>
              <hr className="sidebar__separator sidebar--centered" /> 
              <User />
              <hr className="sidebar__separator sidebar--centered" />
              <nav className="sidebar__menu">
                <Navigation />
              </nav>
            </aside>
            <Switch>
                <Route path="/symptoms" component={Symptoms} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>


    </div>
  );
}

export default App;
