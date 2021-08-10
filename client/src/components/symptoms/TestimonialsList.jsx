import TestimonialsListItem from "./TestimonialsListItem";
import { useParams } from "react-router";
import Form from "./Form";

const TestimonialsList = (props) => {
  const testimonials = [... props.testimonials].reverse();
  const params = useParams();
  const testimonialsBySymptom = testimonials.filter((testimonial) => testimonial.symptom_id === parseInt(params.id));
  const originalPosts = testimonialsBySymptom.filter((testimonial) => !testimonial.reply_to);
  const replies = testimonialsBySymptom.filter((testimonial) => testimonial.reply_to);


  return (
    <div id='testimonial-container'>
      <div>
        <Form symptom_id={parseInt(params.id)} rerender={props.rerender}/>
      </div>
      {originalPosts.map((testimonial) => (
        <TestimonialsListItem key={testimonial.id} testimonial={testimonial} likes={props.likes} replies={replies} rerender={props.rerender}/>
      ))}
    </div>
  );
};
export default TestimonialsList;
