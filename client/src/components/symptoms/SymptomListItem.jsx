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
  return (
    <div>
      <li key={props.id}>
        <table>
          <tr>
            <td>{props.name}</td>
            <td>(Reported by {props.reported} people)</td>
            <td>
              <Link to={`/symptoms/all/${props.id}`}>
                <button> Discuss </button>
              </Link>
            </td>
          </tr>
        </table>
      </li>
    </div>
  );
};
export default SymptomListItem;
