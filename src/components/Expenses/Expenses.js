import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (inputFilter) => {
    setFilteredYear(inputFilter);
    console.log(inputFilter);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
        {props.expenses.map((expense, i) => {
          return <ExpenseItem key={i} date={expense.date} title={expense.title} amount={expense.amount} />;
        })}
      </Card>
    </div>
  );
};

export default Expenses;
