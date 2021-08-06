import { useParams } from "react-router";
import SymptomList from "./SymptomList";
import SymptomListItem from "./SymptomListItem";

const Month = (props) => {
  const symptoms = props.symptoms;
  console.log(symptoms);
  

  const now = new Date();
  const params = useParams();
  console.log(params.id);
  // const getNumberOfMonths = (paramsId) => {
  //   if(paramsId >= 4 && paramsId <= 6) {
  //     return 4;
  //   }
  //   if(paramsId > 6) {
  //     return 5;
  //   }
  //   return paramsId
  // }
  // console.log('THIS IS NEW NUMBER', getNumberOfMonths(params.id)) 

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
