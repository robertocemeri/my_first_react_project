import LoriExpenses from "./components/lori/Expenses/LoriExpenses";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <LoriExpenses items={expenses} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
