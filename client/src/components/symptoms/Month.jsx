import { useParams } from "react-router";
import SymptomList from "./SymptomList";
import SymptomListItem from "./SymptomListItem";

const Month = (props) => {
  const symptoms = props.symptoms;
  console.log(symptoms);

  const now = new Date();
  const params = useParams();
  console.log(params.id);
  const surveys = props.surveys;
  console.log(surveys);

  // console.log(symptomsBySurvey, 'SYMPTOMS BY SURVEY')
  function timeDiffInMonths(dateFrom, dateTo) {
    return (
      dateTo.getMonth() -
      dateFrom.getMonth() +
      12 * (dateTo.getFullYear() - dateFrom.getFullYear())
    );
  }

  const getSurveysByMonth = (arr, paramsId) => {
    return arr.filter((survey) => {
      const date = new Date(survey.time_diagnozed);
      const dateNow = new Date();

      if (paramsId === 4) {
        if (
          timeDiffInMonths(date, dateNow) >= 4 &&
          timeDiffInMonths(date, dateNow) <= 6
        ) {
          return survey;
        }
      }
      if (paramsId === 5) {
        console.log(timeDiffInMonths(date, dateNow));
        if (timeDiffInMonths(date, dateNow) > 6) {
          return survey;
        }
      }
      if (paramsId === timeDiffInMonths(date, dateNow)) {
        return survey;
      }
    });
  };

  console.log(getSurveysByMonth(surveys, parseInt(params.id)));
  const surveysByMonth = getSurveysByMonth(surveys, parseInt(params.id));
  const symptomsBySurvey = symptoms.filter((symptom) =>
    surveysByMonth.find((survey) => survey.symptom_id === symptom.id)
  );

  return (
    <div>
        {symptomsBySurvey.length > 0 ? (
          symptomsBySurvey.map((symptom) => (
            <SymptomListItem
              surveys={surveysByMonth}
              id={symptom.id}
              key={symptom.id}
              name={symptom.name}
            />
          ))
        ) : (
          <h2>No symptoms found within that period</h2>
        )}
    </div>
  );
};
export default Month;
