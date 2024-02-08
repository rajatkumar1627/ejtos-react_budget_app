// Import necessary dependencies from React library
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

// Define Currency component
const Currency = () => {
  // Use the useContext hook to access 'dispatch' from AppContext
  const { dispatch } = useContext(AppContext);

  // Function to handle changing the Currency
  const changeCurrency = (val) => {
    // Dispatch an action to update the Currency in the state
    dispatch({
      type: "CHG_CURRENCY", // Action type
      payload: val,
    });
  };

  // Render the component with a dropdown to select the Currency
  return (
    <div className="alert alert-secondary">
      Currency{" "}
      {
        // Render a select dropdown with options to choose a Currency
        <select
          name="Currency"
          id="Currency"
          style={{
            fontSize: "16px",
            border: "2px solid #4CAF50",
            borderRadius: "5px",
            cursor: "pointer",
            background: "#f8f8f8",
            color: "#333",
          }}
          onChange={(event) => changeCurrency(event.target.value)}
        >
          <option value="$" style={{ backgroundColor: "green" }}>
            US($)
          </option>
          <option value="£" style={{ backgroundColor: "green" }}>
            Uk(£)
          </option>
          <option value="₹" style={{ backgroundColor: "green" }}>
            India(₹)
          </option>
          <option value="CAD" style={{ backgroundColor: "green" }}>
            Canada(CAD)
          </option>
        </select>
      }
    </div>
  );
};

// Export Currency component as the default export
export default Currency;
