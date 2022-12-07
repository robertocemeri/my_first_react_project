import React from "react";
import "./LoriNewExpenses.css";
import LoriExpenseForm from "./LoriExpenseForm";

const LoriNewExpenses = (props) => {
  const saveExpenseDataHandler = (expenseData) => {
    props.onNewExpenseData(expenseData);
  };
  return (
    <div className="new-expense">
      <LoriExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default LoriNewExpenses;
