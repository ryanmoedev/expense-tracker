import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";

const Expenses = (props) => {
  //STATES
  const [filteredYear, setFilteredYear] = useState("2022");

  //HANDLERS
  const filterChangeHandler = (inputFilter) => {
    setFilteredYear(inputFilter);
  };

  //LOGIC
  const filteredExpenses = props.expenses.filter((expense) => {
    if (filteredYear === "all") {
      return true;
    } else {
      return expense.date.getFullYear() === Number.parseInt(filteredYear);
    }
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
