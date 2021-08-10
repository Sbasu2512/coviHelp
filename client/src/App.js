import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import logo from './images/coronavirus.png'

import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import Navigation from './components/Navigation';
import Symptoms from './components/symptoms/Symptoms';
import Home from './components/home/index.jsx'
import User from './components/user/index.jsx'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from '@fortawesome/free-solid-svg-icons'



function App() {
  return (
    <div className="App">
        <Router>
          <main>
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
            <section className="home">
              <Switch>
                <Route path="/symptoms" component={Symptoms} />
                <Route path="/" component={Home} />
              </Switch>
            </section>
          </main>

        </Router>


    </div>
  );
}

export default App;
