import { useState } from "react";
import "./NewExpense.css";
import { v4 as uuidv4 } from "uuid";

import ExpenseForm from "./ExpenseForm";
import ExpenseFormPlaceholder from "./ExpenseFormPlaceholder";

const NewExpense = (props) => {
  const [toggleNewExpense, setToggleNewExpense] = useState(false);

  const newExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuidv4(),
    };
    props.onAddExpense(expenseData);
  };

  const toggleHandler = () => {
    setToggleNewExpense((prevState) => {
      return !prevState;
    });
  };

  if (toggleNewExpense) {
    return (
      <div className="new-expense">
        <ExpenseForm onSubmitExpenseData={newExpenseHandler} onCancel={toggleHandler} />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <ExpenseFormPlaceholder onToggle={toggleHandler} />
      </div>
    );
  }
};

export default NewExpense;
