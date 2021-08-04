
import SymptomListItem from "./SymptomListItem";


const SymptomList = (props) => {
  const symptoms = props.symptoms;
  console.log(symptoms)
  return (
    <ul   >
      <h2>Symptoms List</h2>
      <li>
      { 
        symptoms.map((symptom) => <SymptomListItem
          key={symptom.id}
          id={symptom.id}
          name={symptom.name}
          reported={symptom.reported_times}
        />)
      }

      </li>
    </ul>

  )
}
export default SymptomList;

