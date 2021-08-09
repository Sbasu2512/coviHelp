import React from "react";
import Symptom from "./Symptom";
import Home from "./Home";
import Form from "./Form";
import Table from "react-bootstrap/esm/Table";
import Button from "react-bootstrap/esm/Button";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";

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
      if (survey.symptom_id === props.id) {
        result++;
      }
    }
    return result;
  };

  const numberOfReported = getNumberOfReported(props.surveys);
  return (
    <tbody>
      <tr>
        <td>{props.name} </td>
        <td>
          (Reported by {numberOfReported}{" "}
          {numberOfReported === 1 ? "user" : "users"})
        </td>
        <td>
          <Link to={`/symptoms/all/${props.id}`}>
            <Button variant="outline-info"> Discuss </Button>
          </Link>
        </td>
      </tr>
    </tbody>
  );
};
export default SymptomListItem;
