import React from "react";
import "./LoriNewExpenses.css";
import LoriExpenseForm from "./LoriExpenseForm";

const LoriNewExpenses = () => {
  const saveExpenseDataHandler = (expenseData) => {
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <LoriExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default LoriNewExpenses;
