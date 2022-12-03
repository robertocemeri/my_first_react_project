import Card from "./Card";
import "./RobertoExpenses.css";
import RobertoExpenseItem from "./RobertoExpenseItem";

function RobertoExpense(props) {
  return (
    <Card className="expenses">
      <RobertoExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <RobertoExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <RobertoExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <RobertoExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}

export default RobertoExpense;
