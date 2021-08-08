import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Survey = (props) => {
  const symptoms = props.symptoms;
  const [checkedSymptoms, setCheckedSymptoms] = useState([]);
  const [dateDiagnozed, setDateDiagnozed] = useState("");
  const [error, setError] = useState(false);
  const [thankYouMessage, setThankyouMessage] = useState(false);
  const handleOnChangeDate = (e) => {
    setDateDiagnozed(e.target.value);
  };
  const handleOnChange = (e) => {
    if (e.target.checked) {
      setCheckedSymptoms((prev) => [...prev, parseInt(e.target.value)]);
    }
    if (!e.target.checked) {
      const newArray = checkedSymptoms.filter(
        (symptom) => symptom !== parseInt(e.target.value)
      );
      setCheckedSymptoms(newArray);
    }
  };

  const clickHandler = (e) => {
    e.preventDefault();
    if (checkedSymptoms.length === 0 || dateDiagnozed.length === 0) {
      setError(true);
      return;
    }
    for (let symp of checkedSymptoms) {
      axios
        .post("/api/surveys", {
          symptom_id: symp,
          user_id: "1",
          time_diagnozed: dateDiagnozed,
        })
        .then(() => {
          props.rerender();
          setError(false);
          setThankyouMessage(true);
        });
    }
  };
  return (
    <div>
      {thankYouMessage && (
        <div>
          <h2>Thank you for taking part in out survey!</h2>
          <Link to='/symptoms/all'>Go to the symptoms list </Link>
        </div>
      )}

      {!thankYouMessage && (
        <form onSubmit={clickHandler}>
          <div>
            <label>
              Date when you were diagnozed with COVID
              <span className="clue"></span>
            </label>
            <input
              type="date"
              name="diagnozed_at"
              value={dateDiagnozed}
              onChange={handleOnChangeDate}
            />
          </div>
          <div>
            <div>
              <label>
                What symptoms are you having right now?
                <span className="clue"> (Check all that apply)</span>
              </label>
            </div>
            {symptoms.map((symptom) => {
              return (
                <div key={symptom.id}>
                  <label>
                    <input
                      name="symptom_id"
                      value={symptom.id}
                      type="checkbox"
                      onChange={handleOnChange}
                      className="input-checkbox"
                    />
                    {symptom.name}
                  </label>
                </div>
              );
            })}
          </div>
          {error && <h3>Please fill the survey form.</h3>}
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default Survey;
