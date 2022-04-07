import "./NewExpense.css";
import { v4 as uuidv4 } from "uuid";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const newExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuidv4(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseData={newExpenseHandler} />
    </div>
  );
};

export default NewExpense;
