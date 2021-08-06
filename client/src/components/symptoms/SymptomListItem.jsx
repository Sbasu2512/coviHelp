import React from "react";
import Symptom from "./Symptom";
import Home from "./Home";
import Form from "./Form";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useHistory,
} from "react-router-dom";

const SymptomListItem = (props) => {
  const getNumberOfReported = (surveys) => {
    let result = 0;
    for (let survey of surveys) {
      console.log('THIS IS SURVEY', survey, props.id, 'THIS IS SYMPTOM ID')
      if (survey.symptom_id === props.id) {
        result++;
      }
    }
    return result;
  };
  
  const numberOfReported = getNumberOfReported(props.surveys);
  console.log(props.survey, 'number of reported')
  return (
    <div>
      <li key={props.id}>
        <table>
          <tbody>
          <tr>
            <td>{props.name} </td>
            <td>(Reported by {numberOfReported} {numberOfReported === 1 ? 'user' : "users"})</td>
            <td>
              <Link to={`/symptoms/all/${props.id}`}>
                <button> Discuss </button>
              </Link>
            </td>
          </tr>


          </tbody>
        </table>
      </li>
    </div>
  );
};
export default SymptomListItem;
