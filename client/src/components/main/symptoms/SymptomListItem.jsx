import React from "react";

import Button from "react-bootstrap/esm/Button";

import { Link } from "react-router-dom";

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
          <div className="patient-and-number">
            <span>
              <i className="icon-patient"></i>
            </span>
            <span className='patient-number'>{numberOfReported}</span>
          </div>
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
