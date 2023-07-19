import ExpenseLists from "./ExpenseLists";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./Expensechart";
import React, { useState } from "react";

const Expenses = (props) => {
  const [filteredyear, setFilterey] = useState("2020");

  const filterCha = (selectey) => {
    setFilterey(selectey);
  };

  const filteredExpenses = props.items.filter((expensee) => {
    return expensee.date.getFullYear().toString() === filteredyear;
  });
  return (
    <Card className='expenses'>
      <ExpenseFilter selected={filteredyear} oncha={filterCha} />
      <ExpensesChart expensee={filteredExpenses}/>
      <ExpenseLists items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
