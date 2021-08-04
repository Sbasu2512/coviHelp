const TestimonialsListItem = (props) => {
  return (
    <div>
      
        <article>
          <header><div>{props.testimonial.user_name}</div></header>
          <p> {props.testimonial.text}</p>
          <footer>
            <button>Reply</button>
          </footer>
        </article>
 
    </div>
  );
};
export default TestimonialsListItem;
