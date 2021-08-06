import { useState, useContext, useEffect } from "react";
import SymptomList from "./SymptomList";
import MonthsList from "./MonthsList";
import { Route, Link, Switch } from "react-router-dom";
import Symptom from "./Symptom";
import Month from "./Month";
import TestimonialsList from "./TestimonialsList";
import Survey from "./Survey";
import axios from "axios";



const months = [
  { id: 1, name: `1 month` },
  { id: 2, name: `2 months` },
  { id: 3, name: `Three months` },
  { id: 4, name: `4 - 6 months` },
  { id: 5, name: `Over 6 months` }
];



const Symptoms = () => {

  const [state, setState] = useState({
    symptoms: [],
    testimonials: [], 
    surveys: []
    
  });
  useEffect(() => {
   
    Promise.all([
      axios.get('/api/symptoms'),
      axios.get('/api/posts'),
      axios.get('/api/surveys'),
    ]).then((all) => {
      setState(prev => ({ ...prev, symptoms: all[0].data, testimonials: all[1].data, surveys: all[2].data }));
    })

  }, [])

  return (
    <div>
      <h1>Discuss symptoms</h1>
      <div>
        <Link to="/symptoms/months"> Symptoms by period after diagonsis </Link>
      </div>
      <div>
        <Link to="/symptoms/all"> All symptoms </Link>
      </div>
      <div>
        <Link to="/symptoms/survey">Survey</Link>
      </div>
      <Switch>
        <Route path="/symptoms/all/:id">
          <TestimonialsList testimonials={state.testimonials} />
        </Route>
        <Route path="/symptoms/all">
          <SymptomList symptoms={state.symptoms} surveys={state.surveys}/>
        </Route>
        <Route path="/symptoms/months/:id">
          <Month symptoms={state.symptoms} surveys={state.surveys}/>
        </Route>
        <Route path="/symptoms/months">
          <MonthsList months={months} />
        </Route>
        <Route path="/symptoms/survey">
          <Survey symptoms={state.symptoms}/>
        </Route>
      </Switch>
    </div>
  );
};

export default Symptoms;
