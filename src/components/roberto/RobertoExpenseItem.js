import RobertoExpenseDate from "./RobertoExpenseDate";
import Card from "./Card";
import "./RobertoExpenseItem.css";

function RobertoExpenseItem(props) {
  return (
    <Card className="expense-item">
      <RobertoExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default RobertoExpenseItem;
