import TestimonialsListItem from "./TestimonialsListItem";
import { useParams } from "react-router";
import Form from "./Form";

const TestimonialsList = (props) => {
  const testimonials = props.testimonials;
  const params = useParams();
  const testimonialsBySymptom = testimonials.filter((testimonial) => testimonial.symptom_id === parseInt(params.id))
  return (
    <div>
      <h2>This is tesimonials list</h2>
      <div>
        <Form />
      </div>
      {testimonialsBySymptom.map((testimonial) => (
        <TestimonialsListItem key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
};
export default TestimonialsList;
