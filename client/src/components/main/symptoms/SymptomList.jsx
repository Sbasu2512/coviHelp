import SymptomListItem from "./SymptomListItem";
import Table from "react-bootstrap/esm/Table";

const SymptomList = (props) => {
  const symptoms = props.symptoms;

  return (
    <div className='symptoms-body'>
      {console.log(symptoms)}
      <div className='symptoms-heading'>
        <h2>All symptoms</h2>
      </div>
        <Table hover borderless>
          <thead>
            <tr>
              
            </tr>
          </thead>
            {symptoms.map((symptom) => (
              <SymptomListItem
                surveys={props.surveys}
                key={symptom.id}
                id={symptom.id}
                name={symptom.name}
              />
            ))}
        </Table>
    </div>
  );
};
export default SymptomList;