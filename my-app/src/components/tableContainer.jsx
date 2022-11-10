import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Table } from "../components/table";

export function TableContainer() {
  const [data, setData] = useState({ expenses: { income: [], outcome: [] } });
  const fetchData = async () => {
    const result = await axios(
      "https://9778b80b-156c-4606-a3bc-850f05dcead1.mock.pstmn.io/LISICAR?cardType=DF&servicePackage=T04"
    );
    setData(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <h1 className="exercise-table">Table Form #1</h1>
      <Table income={data.expenses.income} outcome={data.expenses.outcome} />
    </React.Fragment>
  );
}
