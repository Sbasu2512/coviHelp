import Reply from "./Reply";
import { useState, useEffect } from "react";
import Form from "./Form";
import { useParams } from "react-router";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";

const TestimonialsListItem = (props) => {
  const params = useParams();
  const repliesByTestimonialId = props.replies.filter(
    (reply) => reply.reply_to === props.testimonial.id
  );
  const [showReplies, setShowReplies] = useState(false);
  const [showFormToReply, setShowFormToReply] = useState(false);
  const [liked, setLiked] = useState(false);

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

  const addLike = () => {
    if (!liked) {
      axios
        .post("/api/likes", {
          post_id: props.testimonial.id,
          user_id: "1",
        })
        .then(() => {
          setLiked(true);
          props.rerender();
        });
    } else {
      axios
        .delete(`/api/likes/${props.testimonial.id}`, {
          params: { user_id: "1" },
        })
        .then(() => {
          setLiked(false);
          props.rerender();
        });
    }
  };
  const likesByPost = props.likes.filter(
    (like) => like.post_id === props.testimonial.id
  );
  return (
    <div>
      <article key={props.testimonial.id} className="tweet">
        <header>
          <div>{props.testimonial.user_name}</div>
          <div>
            {" "}
            <img className="avatar" src={props.testimonial.photo} />{" "}
          </div>
        </header>
        <p className="text-area-tweet"> {props.testimonial.content}</p>
        <br />
        <footer>
          <Button onClick={clickToReply} variant="secondary">
            Reply
          </Button>
          {repliesByTestimonialId.length > 0 && (
            <Button variant="outline-secondary" onClick={clickToShowReplies}>
              {!showReplies ? (
                <span>{repliesByTestimonialId.length} replies</span>
              ) : (
                <span>Hide replies</span>
              )}{" "}
            </Button>
          )}

          {!liked ? (
            <div className="likes">
              <button className="like-button-unclicked" onClick={addLike}>
                <i class="far fa-heart"></i>
              </button>
              <div className="likes-number">
                {likesByPost.length > 0 && likesByPost.length}
              </div>
            </div>
          ) : (
            <div className="likes">
              <button className="like-button-clicked" onClick={addLike}>
                <i class="far fa-heart clicked"></i>
              </button>
              <div className="likes-number">
                {likesByPost.length > 0 && likesByPost.length}
              </div>
            </div>
          )}
        </footer>
      </article>
      {showFormToReply && (
        <Form
          symptom_id={parseInt(params.id)}
          rerender={props.rerender}
          setShowFormToReply={setShowFormToReply}
          reply_to={props.testimonial.id}
        />
      )}
      {showReplies &&
        repliesByTestimonialId.map((reply) => (
          <Reply key={reply.id} reply={reply} />
        ))}
    </div>
  );
};
export default TestimonialsListItem;
