import { Button } from "react-bootstrap";
import axios from "axios";

const Reply = (props) => {

  const clickToDelete = (e) => {
    axios.delete(`http://localhost:3000/api/posts/${props.reply.id}`)
    .then(() => {
      props.rerender();
    });
  }

  console.log(props.reply)
  return (
    <div>
        <article key={props.reply.id} className='tweet reply'>
          <header><div>{props.reply.user_name}</div></header>
          <p  className='text-area-tweet'> {props.reply.content}</p>
          <br/>
          <footer>
          <div>
              {props.reply.user_id === 1 && <Button onClick={clickToDelete} variant='danger'>Delete</Button>}
            </div>
          </footer>
        </article>
    </div>
  );
};
export default Reply;
