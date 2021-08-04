import TestimonialsListItem from "./TestimonialsListItem";
import Form from "./Form";

const TestimonialsList = (props) => {
  const testimonials = props.testimonials;

  return (
    <div>
      <h2>This is tesimonials list</h2>
      <div>
        <Form />
      </div>
      {testimonials.map((testimonial) => (
        <TestimonialsListItem testimonial={testimonial} />
      ))}
    </div>
  );
};
export default TestimonialsList;
