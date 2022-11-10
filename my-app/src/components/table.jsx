import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export function Table({ income, outcome }) {
  const mappedIncomeHeads = income.map((el) => <th>{el.month}</th>);
  const mappedIncomeValue = income.map((el) => <td>{el.value}</td>);

  const mappedOutcomeHeads = outcome.map((el) => <th>{el.month}</th>);
  const mappedOutcomeValue = outcome.map((el) => <td>{el.item}</td>);

  return (
    <table border="2" cellSpacing="10" cellPadding="10">
      <thead>
        <tr>{mappedIncomeHeads}</tr>
      </thead>
      <tbody>
        <tr>{mappedIncomeValue}</tr>
      </tbody>

      <thead>
        <tr>{mappedOutcomeHeads}</tr>
      </thead>
      <tbody>
        <tr>{mappedOutcomeValue}</tr>
      </tbody>
    </table>
  );
}
