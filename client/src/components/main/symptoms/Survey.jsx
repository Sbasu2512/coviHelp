import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { InputGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Alert } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { FaRegSquare } from "react-icons/fa";
import { FaRegCheckSquare } from "react-icons/fa";

const Survey = (props) => {
  const symptoms = props.symptoms;
  const [startDate, setStartDate] = useState(new Date());
  const [checkedSymptoms, setCheckedSymptoms] = useState([]);
  const [error, setError] = useState(false);
  const [thankYouMessage, setThankyouMessage] = useState(false);
  const [clicked, setClicked] = useState("");

  const handleOnChange = (e) => {
    const val = parseInt(e.currentTarget.value);
    if (!checkedSymptoms.includes(val)) {
      setCheckedSymptoms((prev) => [...prev, val]);
      setClicked(val);
    }
    if (checkedSymptoms.includes(val)) {
      const newArray = checkedSymptoms.filter((symptom) => symptom !== val);
      setCheckedSymptoms(newArray);
    }
  };

  const clickHandler = (e) => {
    e.preventDefault();
    if (checkedSymptoms.length === 0) {
      setError(true);
      return;
    }
    for (let symp of checkedSymptoms) {
      axios
        .post("http://localhost:3000/api/surveys", {
          symptom_id: symp,
          user_id: "1",
          time_diagnozed: startDate,
        })
        .then(() => {
          props.rerender();
          setError(false);
          setThankyouMessage(true);
        });
    }
    console.log(checkedSymptoms, startDate);
  };
  return (
    <div className="symptoms-body">
      <div className='symptoms-heading'>
        <h2>Symptoms timeline</h2>
      </div>
      <InputGroup className="mb-">
        {thankYouMessage && (
          <div>
            <Alert variant="success">
              <h2>Thank you for taking part in out survey!</h2>
              <Link to="/symptoms/months">Symptoms timeline </Link>
            </Alert>
          </div>
        )}

        {!thankYouMessage && (
          <form onSubmit={clickHandler}>
            <div>
              <label>Please select a date when you were diagnozed with COVID-19.</label>
              <div className='datepicker'>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
            <div>
              <div>
                <label>
                  What symptoms are you having right now?
                  <span className="clue"> (Check all that apply)</span>
                </label>
              </div>
              <div>
                <Table borderless>
                  <thead>
                    <tr></tr>
                  </thead>
                  <tbody>
                    {symptoms.map((symptom) => {
                      return (
                        <tr key={symptom.id}>
                          <td>
                            <button
                              type="button"
                              value={symptom.id}
                              className="like-button-unclicked"
                              onClick={handleOnChange}
                            >
                              {!checkedSymptoms.includes(symptom.id) ? (
                                <FaRegSquare />
                              ) : (
                                <FaRegCheckSquare />
                              )}
                            </button>
                          </td>
                          <td>{symptom.name}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
            {error && (
              <div>
                <Alert variant="danger">Please fill the form.</Alert>
              </div>
            )}
            <Button type="sumbit" variant="secondary">
              Submit
            </Button>
          </form>
        )}
      </InputGroup>
    </div>
  );
};

export default Survey;
