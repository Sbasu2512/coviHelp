const Reply = (props) => {
  return (
    <div>
        <article key={props.reply.id} className='tweet reply' >
          <header><div>{props.reply.user_name}</div></header>
          <p  className='text-area-tweet'> {props.reply.content}</p>
          <footer>
          </footer>
        </article>
    </div>
  );
};
export default Reply;
