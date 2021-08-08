import Reply from "./Reply";
import { useState } from "react";
import Form from './Form'
import { useParams } from "react-router";



const TestimonialsListItem = (props) => {
  const params = useParams();
  const repliesByTestimonialId = props.replies.filter(
    (reply) => reply.reply_to === props.testimonial.id
  );
  const [showReplies, setShowReplies] = useState(false);
  const [showFormToReply, setShowFormToReply] = useState(false);

  const clickToShowReplies = (e) => {
    if (!showReplies) {
      setShowReplies(true);
    } else {
      setShowReplies(false);
    }
  };

  const clickToReply = (e) => {
    if (!showFormToReply) {
      setShowFormToReply(true);
    } else {
      setShowFormToReply(false);
    }
  };

  return (
    <div>
      <article key={props.testimonial.id}>
        <header>
          <div>{props.testimonial.user_name}</div>
        </header>
        <p> {props.testimonial.content}</p>
        <footer>
          <button onClick={clickToReply}>Reply</button>
          <div>
            {repliesByTestimonialId.length > 0 && (
              <button onClick={clickToShowReplies}>
                {" "}
                {repliesByTestimonialId.length} replies{" "}
              </button>
            )}
          </div>
        </footer>
      </article>
      {showFormToReply && <Form symptom_id={parseInt(params.id)} rerender={props.rerender} reply_to={props.testimonial.id}/>}
      {showReplies &&
        repliesByTestimonialId.map((reply) => (
          <Reply key={reply.id} reply={reply} />
        ))}
    </div>  
  );
};
export default TestimonialsListItem;
