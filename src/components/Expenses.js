import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem
          expenseTitle={expense.title}
          expenseDate={expense.date}
          expenseAmount={expense.amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
