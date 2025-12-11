import React, { useState } from "react";
import MountainChart from "./MountainChart";
import "./App.css";

function calculateInvestment({ initial, monthly, years, rate }) {
  const months = years * 12;
  const monthlyRate = rate / 100 / 12;
  let value = initial;
  let totalContributions = initial;
  let breakdown = [];
  for (let i = 1; i <= months; i++) {
    value = value * (1 + monthlyRate) + monthly;
    totalContributions += monthly;
    if (i % 12 === 0) {
      breakdown.push({
        year: i / 12,
        value: Math.round(value * 100) / 100,
        contributions: totalContributions,
        interest: Math.round((value - totalContributions) * 100) / 100,
      });
    }
  }
  return {
    futureValue: Math.round(value * 100) / 100,
    totalContributions,
    totalInterest: Math.round((value - totalContributions) * 100) / 100,
    breakdown,
  };
}

export default function App() {
  const [form, setForm] = useState({
    initial: 10000,
    monthly: 500,
    years: 20,
    rate: 7,
  });
  const [result, setResult] = useState(calculateInvestment(form));

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: Number(value) }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setResult(calculateInvestment(form));
  }

  return (
    <div className="container">
      <h1>Investment Calculator</h1>
      <form className="input-form" onSubmit={handleSubmit}>
        <label>
          Initial Investment ($)
          <input type="number" name="initial" value={form.initial} onChange={handleChange} min="0" />
        </label>
        <label>
          Monthly Contribution ($)
          <input type="number" name="monthly" value={form.monthly} onChange={handleChange} min="0" />
        </label>
        <label>
          Years to Grow
          <input type="number" name="years" value={form.years} onChange={handleChange} min="1" />
        </label>
        <label>
          Estimated Rate of Return (%)
          <input type="number" name="rate" value={form.rate} onChange={handleChange} min="0" step="0.1" />
        </label>
        <button type="submit">Calculate</button>
      </form>
      <div className="results">
        <h2>Results</h2>
        <p><strong>Future Value:</strong> ${result.futureValue.toLocaleString()}</p>
        <p><strong>Total Contributions:</strong> ${result.totalContributions.toLocaleString()}</p>
        <p><strong>Total Interest Earned:</strong> ${result.totalInterest.toLocaleString()}</p>
        <table className="breakdown-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Value</th>
              <th>Contributions</th>
              <th>Interest</th>
            </tr>
          </thead>
          <tbody>
            {result.breakdown.map((row) => (
              <tr key={row.year}>
                <td>{row.year}</td>
                <td>${row.value.toLocaleString()}</td>
                <td>${row.contributions.toLocaleString()}</td>
                <td>${row.interest.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Chart removed as requested */}
      <div className="education">
        <h3>How does it work?</h3>
        <p>
          Compound interest helps your money grow faster. Regular contributions and time are key to reaching your financial summit!
        </p>
      </div>
    </div>
  );
}