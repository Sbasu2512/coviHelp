import { Link } from "react-router-dom";


const MonthListItem = (props) => {
  return (
    <div>
      <div></div>
      <Link to={`/symptoms/months/${props.month.id}`}>
        <li>{props.month.name}</li>
      </Link>
    </div>
  );
};

export default MonthListItem;
