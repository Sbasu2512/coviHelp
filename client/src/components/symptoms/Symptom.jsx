import { useParams } from "react-router";

const Symptom = () => {
  const params = useParams();
  return (
    <div>
      <h1>HELLO, I AM A SYMPTOM #{params.id}</h1>
    </div>
  )

    
}
export default Symptom;