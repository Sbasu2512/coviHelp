import SymptomList from "./SymptomList";
import SymptomListItem from "./SymptomListItem";

const Month = (props) => {
  const symptoms = props.symptoms;
  console.log(symptoms);

  const dateD = symptoms[9].diagnozed;
  const dateN = new Date(dateD);
  const now = new Date();

  function timeDiffInMonths(dateFrom, dateTo) {
    return dateTo.getMonth() - dateFrom.getMonth() + 
      (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
   }
   
  const getSymptomsByMonth = (arr, numberOfMonths) => {
   return arr.filter((symptom) => {
      const date = new Date(symptom.diagnozed);
      const dateNow = new Date();
      if(numberOfMonths === timeDiffInMonths(date, dateNow)) {
        return symptom;
      }
    })

  };
  const symptomsByMonth = getSymptomsByMonth(symptoms, 1);
  return (
    <div>
      {symptomsByMonth.map((symptom) => (
        <SymptomListItem key={symptom.id} name={symptom.name} reported={symptom.reported_times}/>
      ))}
    </div>
  );
};
export default Month;
