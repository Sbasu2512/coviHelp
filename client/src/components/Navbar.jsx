import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./symptoms/Home";
import Symptoms from "./symptoms/Symptoms";
import Symptom from "./symptoms/Symptom";

const Navbar = () => {
  return (
    <nav>
      <Router>
        <div>
          <Link to="/">Home </Link>
        </div>
        <div>
          <Link to="/symptoms">Symptoms</Link>
        </div>
        <div>
          <Link></Link>
        </div>
        <Switch>
          <Route path="/symptoms">
            <Symptoms />
          </Route>
          <Route path="/">
            {" "}
            <Home />{" "}
          </Route>
        </Switch>
      </Router>
    </nav>
  );
};

export default Navbar;
