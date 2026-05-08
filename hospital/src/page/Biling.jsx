import { useState } from 'react';

function BillingSystem() {
  const [patient, setPatient] = useState('');
  const [amount, setAmount] = useState('');
  const [bills, setBills] = useState([]);

  const generateBill = () => {
    if (!patient || !amount) {
      return;
    }

    const newBill = {
      id: bills.length + 1,
      patient,
      amount
    };

    setBills([...bills, newBill]);
    setPatient('');
    setAmount('');
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Billing System</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Patient Name"
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={generateBill}>Generate Bill</button>
        </div>

        <ul>
          {bills.map((bill) => (
            <li key={bill.id}>
              {bill.patient} - ₹{bill.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BillingSystem;