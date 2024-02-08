import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, expenses, dispatch, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    const enteredBudget = parseInt(event.target.value);

    // Calculate total spending (allocated expenses)
    const totalSpending = expenses.reduce(
      (total, expense) => total + expense.cost,
      0
    );

    // Check both conditions: not more than $20,000 and not less than total spending
    if (enteredBudget <= 20000 && enteredBudget >= totalSpending) {
      dispatch({ type: "SET_BUDGET", payload: enteredBudget });
      setNewBudget(enteredBudget);
    } else {
      // Display customized alert messages for each condition
      if (enteredBudget > 20000) {
        alert("Budget cannot exceed $20,000.");
      } else {
        alert("Budget should be at least equal to the total spending.");
      }
    }
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};

export default Budget;
