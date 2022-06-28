import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  return (
    <div>
      <ul>
        {props.expenses.map((expense) => (
          <li key={expense.id}>
            <ExpenseItem
              expenseTitle={expense.title}
              expenseDate={expense.date}
              expenseAmount={expense.amount}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Expenses;
