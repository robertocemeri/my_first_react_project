import "./LoriExpenseItem.css";
import Card from "../UI/Card";
import LoriExpenseDate from "./LoriExpenseDate";
function LoriExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <LoriExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price"> {props.amount}</div>
        </div>
      </Card>
    </li>
  );
}
export default LoriExpenseItem;
