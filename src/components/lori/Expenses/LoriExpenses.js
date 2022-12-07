import LoriExpenseItem from "./LoriExpenseItem";
import Card from "../UI/Card";
import "./LoriExpenses.css";
import LoriExpensesFilter from "./LoriExpensesFilter";
import React, { useState } from "react";
function LoriExpenses(props) {
  const [selected, setSelected] = useState("2020");
  const filterValue = (value) => {
    setSelected(value);

    console.log(value);
  };
  return (
    <div>
      <Card className="expenses">
        <LoriExpensesFilter selected={selected} onChangeFilter={filterValue} />

        {props.items.map((expense) => (
          <LoriExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
            key={expense.id}
          />
        ))}
      </Card>
    </div>
  );
}
export default LoriExpenses;
