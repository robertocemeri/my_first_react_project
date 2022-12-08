import Card from "../UI/Card";
import "./LoriExpenses.css";
import LoriExpensesFilter from "./LoriExpensesFilter";
import React, { useState } from "react";
import LoriExpensesList from "./LoriExpensesList";
function LoriExpenses(props) {
  const [selected, setSelected] = useState("2020");
  const filterValue = (value) => {
    setSelected(value);

    console.log(value);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selected;
  });

  return (
    <div>
      <Card className="expenses">
        <LoriExpensesFilter selected={selected} onChangeFilter={filterValue} />

        <LoriExpensesList items={filteredExpenses} />
        {/* 
        {filteredExpenses.length === 0 && <p>No expenses found</p>}
        {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
            <LoriExpenseItem
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
              key={expense.id}
            />
          ))} */}
      </Card>
    </div>
  );
}
export default LoriExpenses;
