import { useState, useContext, useEffect } from "react";
import SymptomList from "./SymptomList";
import MonthsList from "./MonthsList";
import { Route, Link, Switch } from "react-router-dom";
import Symptom from "./Symptom";
import Month from "./Month";
import TestimonialsList from "./TestimonialsList";
import Survey from "./Survey";
import axios from "axios";
import { Nav } from "react-bootstrap";
import './styling/Symptoms.scss'

const months = [
  { id: 1, name: `1 month after diagnosis` },
  { id: 2, name: `2 months after diagnosis` },
  { id: 3, name: `3 months after diagnosis` },
  { id: 4, name: `4 - 6 months after diagnosis` },
  { id: 5, name: `Over 6 months after diagnosis` },
  { id: 6, name: `Over one year after diagnosis` },
];

const Symptoms = () => {
  const [rerenderState, setRerenderState] = useState(0);
  const [state, setState] = useState({
    symptoms: [],
    testimonials: [],
    surveys: [],
    likes: [],
  });
  useEffect(() => {
    Promise.all([
      axios.get("/api/symptoms"),
      axios.get("/api/posts"),
      axios.get("/api/surveys"),
      axios.get("/api/likes"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        symptoms: all[0].data,
        testimonials: all[1].data,
        surveys: all[2].data,
        likes: all[3].data,
      }));
    });
  }, [rerenderState]);

  const rerender = () => {
    setRerenderState((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Discuss symptoms</h1>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Link to="/symptoms/months">
            <Nav.Link href="/home">Symptoms timeline</Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/symptoms/all">
            <Nav.Link href="/link-1">All symptoms</Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/symptoms/survey">
            <Nav.Link href="/link-2">Survey</Nav.Link>
          </Link>
        </Nav.Item>
      </Nav>
      {/*       
      <div>
        <Link to="/symptoms/months"> Symptoms by period after diagonsis </Link>
      </div>
      <div>
        <Link to="/symptoms/all"> All symptoms </Link>
      </div>
      <div>
        <Link to="/symptoms/survey">Survey</Link>
      </div> */}
      <Switch>
        <Route path="/symptoms/all/:id">
          <TestimonialsList
            testimonials={state.testimonials}
            likes={state.likes}
            rerender={rerender}
          />
        </Route>
        <Route path="/symptoms/all">
          <SymptomList symptoms={state.symptoms} surveys={state.surveys} />
        </Route>
        <Route path="/symptoms/months/:id">
          <Month symptoms={state.symptoms} surveys={state.surveys} />
        </Route>
        <Route path="/symptoms/months">
          <MonthsList
            months={months}
            symptoms={state.symptoms}
            surveys={state.surveys}
          />
        </Route>
        <Route path="/symptoms/survey">
          <Survey symptoms={state.symptoms} rerender={rerender} />
        </Route>
      </Switch>
    </div>
  );
};

export default Symptoms;
