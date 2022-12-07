import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (expenseData) => {
    props.onNewExpenseData(expenseData);
  };
  const formOpenHandler = () => {
    setOpen(!open);
  };
  const [open, setOpen] = useState(false);
  let newExpenseContent = (
    <button onClick={formOpenHandler}>Add New Expense</button>
  );
  if (open === true) {
    newExpenseContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onFormClose={formOpenHandler}
      />
    );
  }
  return <div className="new-expense">{newExpenseContent}</div>;
};

export default NewExpense;
