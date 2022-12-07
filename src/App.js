import LoriExpenses from "./components/lori/Expenses/LoriExpenses";
import LoriNewExpenses from "./components/lori/LoriNewExpenses/LoriNewExpenses";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Landi Toilet Paper",
    amount: 100.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Landi New TV",
    amount: 500.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Landi Car Insurance",
    amount: 400.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Landi New Desk (Wooden)",
    amount: 300,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const NewExpenseDataHandler = (newExpenseData) => {
    setExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    });
    console.log("dx");
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <LoriNewExpenses onNewExpenseData={NewExpenseDataHandler} />
      <LoriExpenses items={expenses} />
      <NewExpense onNewExpenseData={NewExpenseDataHandler} />

      <Expenses items={expenses} />
    </div>
  );
}

export default App;
