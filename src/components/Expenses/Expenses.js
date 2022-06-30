import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
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
};

export default Expenses;
