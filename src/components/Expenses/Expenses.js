import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((expense, i) => {
        return <ExpenseItem key={i} date={expense.date} title={expense.title} amount={expense.amount} />;
      })}
    </Card>
  );
};

export default Expenses;
