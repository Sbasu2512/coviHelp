import { useContext } from "react";
import MonthListItem from "./MonthListItem";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SymptomListItem from "./SymptomListItem";

const MonthsList = (props) => {
  const now = new Date();
  const surveys = props.surveys;
  const symptoms = props.symptoms;
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
        if (
          timeDiffInMonths(date, dateNow) > 6 &&
          timeDiffInMonths(date, dateNow) <= 12
        ) {
          return survey;
        }
      }

      if (paramsId === 6) {
        if (timeDiffInMonths(date, dateNow) > 12) {
          return survey;
        }
      }

      if (paramsId === timeDiffInMonths(date, dateNow)) {
        return survey;
      }
      if (paramsId === 1 && timeDiffInMonths(date, dateNow) === 0) {
        return survey;
      }
    });
  };

  const months = props.months;
  return (
    
      <div>
        {months.map((month) => {
          const surveysByMonth = getSurveysByMonth(surveys, month.id);
          const symptomsBySurvey = symptoms.filter((symptom) =>
            surveysByMonth.find((survey) => survey.symptom_id === symptom.id)
          );
          return (
            <VerticalTimeline key={month.id}>
              <VerticalTimelineElement key={month.id} date={month.name}>
                <div>
                  {symptomsBySurvey.length > 0 ? (
                    symptomsBySurvey.map((symptom) => (
                      <div>
                        <ul>
                          <SymptomListItem
                            surveys={surveysByMonth}
                            id={symptom.id}
                            key={symptom.id + Math.random()}
                            name={symptom.name}
                          />
                        </ul>
                      </div>
                    ))
                  ) : (
                    <h2>No symptoms reported for that period</h2>
                  )}
                </div>
              </VerticalTimelineElement>
            </VerticalTimeline>
          );
        })}
      </div>

  
  );
};
export default MonthsList;
