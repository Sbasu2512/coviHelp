import { useState, useEffect } from "react";
import SymptomList from "./SymptomList";
import MonthsList from "./MonthsList";
import { Route, Link, Switch } from "react-router-dom";
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
      axios.get("http://localhost:3000/api/symptoms"),
      axios.get("http://localhost:3000/api/posts"),
      axios.get("http://localhost:3000/api/surveys"),
      axios.get("http://localhost:3000/api/likes"),
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
      <Switch>
        <Route path="/symptoms/all/:id">
          <TestimonialsList
            testimonials={state.testimonials}
            likes={state.likes}
            rerender={rerender}
            symptoms={state.symptoms}
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