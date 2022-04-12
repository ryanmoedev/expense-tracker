const ExpenseFormPlaceholder = (props) => {
  return (
    <div>
      <button onClick={props.onToggle}>Add New Expense</button>
    </div>
  );
};

export default ExpenseFormPlaceholder;
