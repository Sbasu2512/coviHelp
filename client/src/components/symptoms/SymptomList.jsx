
import SymptomListItem from "./SymptomListItem";


const SymptomList = (props) => {
  const symptoms = props.symptoms;
  
  return (
    <ul   >
      <h2>Symptoms List</h2>
      
      { 
        symptoms.map((symptom) => <SymptomListItem surveys ={props.surveys}
          key={symptom.id}
          id={symptom.id}
          name={symptom.name}
          reported={symptom.reported_times}
        />)
      }

    
    </ul>

  )
}
export default SymptomList;

