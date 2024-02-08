import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: -10,
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <button
          onClick={(event) => increaseAllocation(props.name)}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            padding: "10px 20px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "20px",
            margin: "4px 2px",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          <b>+</b>
        </button>
      </td>
      <td>
        <button
          onClick={(event) => decreaseAllocation(props.name)}
          style={{
            backgroundColor: "lightcoral",
            color: "white",
            border: "none",
            padding: "10px 20px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "20px",
            margin: "4px 2px",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          <b>-</b>
        </button>
      </td>

      <td>
        <TiDelete
          size="3em"
          onClick={handleDeleteExpense}
          style={{ cursor: "pointer", color: "#FF0000" }}
        />
      </td>
    </tr>
  );
};
export default ExpenseItem;
