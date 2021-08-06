const TestimonialsListItem = (props) => {
  return (
    <div>
      
        <article key={props.testimonial.id}>
          <header><div>{props.testimonial.user_name}</div></header>
          <p> {props.testimonial.content}</p>
          <footer>
            <button>Reply</button>
          </footer>
        </article>
 
    </div>
  );
};
export default TestimonialsListItem;
