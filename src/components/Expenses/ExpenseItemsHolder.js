import React, { useState } from "react";
import "./ExpenseItemsHolder.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseCondition from "./ExpenseCondition";
import ExpensesChart from "./ExpensesChart";

const ExpenseItemHolder = (props) => {
  // the year which is coming from filter dropdown
  const [pickedYear, setPickedYear] = useState();

  const filterChangeHandler = (selectedYear) => {
    setPickedYear(selectedYear);
  };
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === pickedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          pickedYearValue={pickedYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseCondition expenseList={filteredExpenses} />
      </Card>
    </div>
  );
};

export default ExpenseItemHolder;
