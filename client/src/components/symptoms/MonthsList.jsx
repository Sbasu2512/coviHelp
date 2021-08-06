import { useContext } from "react";
import MonthListItem from "./MonthListItem";

const MonthsList = (props) => {
  const months = props.months;
  return (
    <div>
      <h1>Diagnozed within:</h1>
      {months.map((month) => <MonthListItem key={month.id} month={month}/>)}
    </div>

  )  
}
export default MonthsList;