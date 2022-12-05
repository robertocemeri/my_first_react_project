import LoriExpenseItem from "./LoriExpenseItem";
import Card from "../UI/Card";
import "./LoriExpenses.css";

function LoriExpenses(props) {
  return (
    <Card className="expenses">
      <LoriExpenseItem
        title={props.items[0].title}
        date={props.items[0].date}
        amount={props.items[0].amount}
      />
      <LoriExpenseItem
        title={props.items[1].title}
        date={props.items[1].date}
        amount={props.items[1].amount}
      />
      <LoriExpenseItem
        title={props.items[2].title}
        date={props.items[2].date}
        amount={props.items[2].amount}
      />
    </Card>
  );
}
export default LoriExpenses;
