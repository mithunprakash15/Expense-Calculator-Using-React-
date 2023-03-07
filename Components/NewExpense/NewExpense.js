import React , { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';



const NewExpense = (props) => {
    const [isEdited , setIsEdited] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
      };
      props.onAddExpense(expenseData);
      setIsEdited(false);
    };
    const editHandler = () => {
        setIsEdited(true);
    }
    const stopEditingHandler =() =>{
        setIsEdited(false);
    }
  
    return (
      <div className='new-expense'>
        
        {!isEdited && <button onClick={editHandler}>Add Expense</button>}
       {isEdited && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
      </div>
    );
  };
  
  export default NewExpense;