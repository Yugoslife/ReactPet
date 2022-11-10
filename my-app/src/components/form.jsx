import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export function Form() {
  const [array, setArray] = useState("");

  const handleInputChangeArray = (event) => {
    const { target } = event;
    setArray(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = array.split(" ");
    const resultMap = result.map((x) => x * 2);
    const resultFilter = resultMap.filter((x) => x > 6);
  };

  const handleResetAll = (event) => {
    event.preventDefault();
    setArray("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Array:
        <input
          type="text"
          array="array"
          value={array}
          onChange={handleInputChangeArray}
        />
      </label>
      <br />
      <button className="btn btn-primary" type="submit" value="submit">
        Submit
      </button>

      <button
        onClick={handleResetAll}
        className="btn btn-secondary"
        type=""
        value=""
      >
        Reset
      </button>
    </form>
  );
}
