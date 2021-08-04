import { useState, useContext } from "react";
import SymptomList from "./SymptomList";
import MonthsList from "./MonthsList";
import { Route, Link, Switch } from "react-router-dom";
import Symptom from "./Symptom";
import Month from "./Month";
import TestimonialsList from "./TestimonialsList";
import Survey from "./Survey";
const symptoms = [
  {
    id: 1,
    name: `Difficulty breathing or shortness of breath`,
    diagnozed: `2020-10-08`,
    reported_times: 2,
  },
  {
    id: 2,
    name: `Tiredness or fatigue`,
    diagnozed: `2020-11-11`,
    reported_times: 6,
  },
  {
    id: 3,
    name: `Difficulty thinking or concentrating`,
    diagnozed: `2020-12-13`,
    reported_times: 7,
  },
  { id: 4, name: `Cough`, diagnozed: `2021-01-04`, reported_times: 8 },
  {
    id: 5,
    name: `Chest or stomach pain`,
    diagnozed: `2021-02-11`,
    reported_times: 2,
  },
  { id: 6, name: `Headache`, diagnozed: `2021-02-11`, reported_times: 4 },
  { id: 7, name: `Rash`, diagnozed: `2020-12-13`, reported_times: 5 },
  { id: 8, name: `Mood changes`, diagnozed: `2021-01-04`, reported_times: 2 },
  {
    id: 9,
    name: `Change in smell or taste`,
    diagnozed: `2021-02-11`,
    reported_times: 1,
  },
  {
    id: 10,
    name: `Changes in period cycles`,
    diagnozed: `2021-07-11`,
    reported_times: 4,
  },
];

const months = [
  { id: 1, name: `1 month` },
  { id: 2, name: `2 months` },
  { id: 3, name: `Three months` },
  { id: 3, name: `4 - 6 months` },
  { id: 3, name: `Over 6 months` }
];

const testimonials = [
  {
    id: 1,
    text: `Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue`,
    user_name: "John",
  },
  {
    id: 2,
    text: `Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue`,
    user_name: "Bob",
  },
  {
    id: 3,
    text: `Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue`,
    user_name: "Ellie",
  },
  {
    id: 4,
    text: `Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue`,
    user_name: "Nataly",
  },
  {
    id: 5,
    text: `Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue`,
    user_name: "Frank",
  },
];

const Symptoms = () => {
  const [state, setState] = useState({
    symptoms,
    months,
    testimonials,
  });

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
          <SymptomList symptoms={state.symptoms} />
        </Route>
        <Route path="/symptoms/months/:id">
          <Month symptoms={state.symptoms} />
        </Route>
        <Route path="/symptoms/months">
          <MonthsList months={state.months} />
        </Route>
        <Route path="/symptoms/survey">
          <Survey symptoms={state.symptoms}/>
        </Route>
      </Switch>
    </div>
  );
};

export default Symptoms;
