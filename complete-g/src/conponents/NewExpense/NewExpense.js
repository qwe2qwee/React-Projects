import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const fromForm = (data) => {
    const DataFromNew = {
      ...data,
      id: Math.floor(Math.random() * 8).toString()
    };
    props.Expen(DataFromNew);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm DataFromForm={fromForm} />
    </div>
  );
};

export default NewExpense;
