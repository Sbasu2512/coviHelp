import { useState } from "react";

const Survey = (props) => {
  const symptoms = props.symptoms;
  const [checkedSymptoms, setCheckedSymptoms] = useState([]);
  const [dateDiagnozed, setDateDiagnozed] = useState('')

  const handleOnChangeDate = (e) => {

    setDateDiagnozed(e.target.value)
  }

  const handleOnChange = (e) => {
    console.log(e.target.value);
    if(e.target.checked) {
      setCheckedSymptoms((prev) => [... prev, parseInt(e.target.value)])
    }
    if(!e.target.checked) {
      console.log(e.target.value, 'unchecked!')
      const newArray = checkedSymptoms.filter(symptom => symptom !== parseInt(e.target.value));
      setCheckedSymptoms(newArray);
    }
   
  };
  
  const clickHandler = (e) => {
    e.preventDefault();
    console.log(checkedSymptoms, dateDiagnozed);
  };

  return (
    <div>
      <form onSubmit={clickHandler}>
        <div>
          <label>
            Date when you were diagnozed with COVID
            <span className="clue"></span>
          </label>
          <input type="date" name="diagnozed_at" value={dateDiagnozed}  onChange={handleOnChangeDate}/>
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

        <button>Send data!</button>
      </form>
      
    </div>
  );
};

export default Survey;
