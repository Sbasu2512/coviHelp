const Survey = (props) => {
  const symptoms = props.symptoms;

  return (
    <div>
      <div>
        <header>
          <h1>Long term COVID symptoms</h1>
          <p>Thank you for taking the time to take part in our survey.</p>
        </header>
        <form id="survey-form">
          <div class="form-group">
            <label id="number-label" for="number">
              Age<span class="clue"></span>
            </label>
            <input
              type="number"
              name="age"
              id="number"
              min="10"
              max="99"
              placeholder="Age"
            />
          </div>
          <div>
            <label>
              Date when you were diagnozed with COVID<span class="clue"></span>
            </label>
            <input type="date" name="diagnozed_at" />
          </div>

          <div class="form-group">
            <p>
              What would you like to see improved?
              <span class="clue">(Check all that apply)</span>
            </p>

            {symptoms.map((symptom) => {
              return (
                <div>
                <label>
                  <input
                    name="prefer"
                    value="front-end-projects"
                    type="checkbox"
                    class="input-checkbox"
                  />
                  {symptom.name}
                </label>
                </div>
              );
            })}
          </div>
          <div>
            <button type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Survey;
