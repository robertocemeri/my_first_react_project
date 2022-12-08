import React from "react";
import LoriExpenseItem from "./LoriExpenseItem";
import "./LoriExpensesList.css";

const LoriExpensesList = (props) => {
  if (props.items.length === 0)
    return <h2 className="expenses-list__fallback">ske asigjo ktu</h2>;

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => {
        return (
          <LoriExpenseItem
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
            key={expense.id}
          />
        );
      })}
    </ul>
  );
};

export default LoriExpensesList;
