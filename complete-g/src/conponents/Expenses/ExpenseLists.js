import ExpenseItem from "./ExpenseItem";
import "./ExpenseLists.css";

const ExpenseLists = (props) => {
  return props.items.length === 0 ? (
    <p className="expenses-list__fallback">No expenses found</p>
  ) : (
    props.items.map((expenses) => (
      <ExpenseItem
        key={expenses.id}
        Title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      />
    ))
  );
};

export default ExpenseLists;
