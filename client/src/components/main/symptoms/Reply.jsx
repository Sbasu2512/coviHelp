import { Button } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

const Reply = (props) => {

  const [liked, setLiked] = useState(false);
  const likesByPost = props.likes.filter(
    (like) => like.post_id === props.reply.id
  );
  const addLike = () => {
    if (!liked) {
      axios
        .post("http://localhost:3000/api/likes", {
          post_id: props.reply.id,
          user_id: "1",
        })
        .then(() => {
          setLiked(true);
          props.rerender();
        });
    } else {
      axios
        .delete(`http://localhost:3000/api/likes/${props.reply.id}`, {
          params: { user_id: "1" },
        })
        .then(() => {
          setLiked(false);
          props.rerender();
        });
    }
  };

  const clickToDelete = (e) => {
    axios.delete(`http://localhost:3000/api/posts/${props.reply.id}`)
    .then(() => {
      props.rerender();
    });
  }

  console.log(props.reply)
  return (
    <div className='symptoms-body'>
        <article key={props.reply.id} className='tweet reply'>
          <header className='reply-header'><div className='user-name'>{props.reply.user_name}</div>
          <div>
            <img className="avatar" src={props.reply.photo} />
          </div>
          </header>
          <p  className='text-area-tweet'> {props.reply.content}</p>
          <br/>
          <footer>
          <div>
              {props.reply.user_id === 1 && <Button onClick={clickToDelete} variant='danger'>Delete</Button>}
            </div>
            {!liked ? (
            <div className="likes">
              <button className="like-button-unclicked" onClick={addLike}>
                <i className="far fa-heart"></i>
              </button>
              <div className="likes-number">
                {likesByPost.length > 0 && likesByPost.length}
              </div>
            </div>
          ) : (
            <div className="likes">
              <button className="like-button-clicked" onClick={addLike}>
                <i className="far fa-heart clicked"></i>
              </button>
              <div className="likes-number">
                {likesByPost.length > 0 && likesByPost.length}
              </div>
            </div>
          )}
          </footer>
        </article>
    </div>
  );
};
export default Reply;
