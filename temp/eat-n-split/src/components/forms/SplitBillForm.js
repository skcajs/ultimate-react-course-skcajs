import { useState } from "react";
import Button from "../common/Button";

export default function SplitBillForm({ selectedFriend, onSplitBill }) {
  const [billValue, setBillValue] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [payee, setPayee] = useState("you");

  const amountOwed =
    payee === "you" ? billValue - yourExpense : -1 * yourExpense;

  function handleExpenses(expense) {
    setYourExpense(expense);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!billValue || !yourExpense) return;

    onSplitBill(amountOwed);

    setBillValue("");
    setYourExpense("");
    setPayee("you");
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        value={billValue}
        onChange={(e) => setBillValue(Number(e.target.value))}
        type="text"
      />

      <label>🧍Your expense</label>
      <input
        value={yourExpense}
        onChange={(e) =>
          handleExpenses(Number(Math.min(e.target.value, billValue)))
        }
        type="text"
      />

      <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense</label>
      <input
        disabled={true}
        value={billValue ? billValue - yourExpense : ""}
        type="text"
      />

      <label>🤑 Who is paying the bill?</label>
      <select value={payee} onChange={(e) => setPayee(e.target.value)}>
        <option value="you">You</option>
        <option value={selectedFriend.name}>{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
