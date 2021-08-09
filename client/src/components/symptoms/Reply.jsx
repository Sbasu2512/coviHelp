const Reply = (props) => {
  return (
    <div>
        <article key={props.reply.id}>
          <header><div>{props.reply.user_name}</div></header>
          <p> {props.reply.content}</p>
          <footer>
          </footer>
        </article>
    </div>
  );
};
export default Reply;
