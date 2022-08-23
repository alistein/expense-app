import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing,setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const cancelHandler = () => {
    setIsEditing(false);
  }

  return <div className="new-expense">
  {/* it shows the true condition */}
  {!isEditing && <button onClick={() => {setIsEditing(true)}} >Add Expense</button>}
  {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler}/>}
  </div>;
};

export default NewExpense;
