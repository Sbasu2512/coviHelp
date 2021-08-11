import TestimonialsListItem from "./TestimonialsListItem";
import { useParams } from "react-router";
import Form from "./Form";

const TestimonialsList = (props) => {
  const testimonials = [... props.testimonials].reverse();
  const params = useParams();
  const testimonialsBySymptom = testimonials.filter((testimonial) => testimonial.symptom_id === parseInt(params.id));
  const originalPosts = testimonialsBySymptom.filter((testimonial) => !testimonial.reply_to);
  const replies = testimonialsBySymptom.filter((testimonial) => testimonial.reply_to);
  const symptom = props.symptoms.find((symptom) => symptom.id === parseInt(params.id))
  
  return (
    <div className='symptoms-body'>
      <div className='symptoms-heading'>
      {symptom  && <h3>{symptom.name}</h3>}  
      </div>
      <div className='form-testimonial'>
        <Form symptom_id={parseInt(params.id)} rerender={props.rerender}/>
      </div>
      {originalPosts.map((testimonial) => (
        <TestimonialsListItem key={testimonial.id} testimonial={testimonial} likes={props.likes} replies={replies} rerender={props.rerender}/>
      ))}
    </div>
  );
};
export default TestimonialsList;