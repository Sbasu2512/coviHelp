import SymptomListItem from "./SymptomListItem";
import Table from "react-bootstrap/esm/Table";

const SymptomList = (props) => {
  const symptoms = props.symptoms;

  return (
    <div>
        <Table hover borderless>
          <thead>
            <tr>
              <th>Name of the symptom</th>
              <th>Number of users reported this symptom</th>
              <th>Link to discussion</th>
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
