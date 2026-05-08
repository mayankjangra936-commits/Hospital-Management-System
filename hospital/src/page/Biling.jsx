import { useState } from 'react';

function BillingSystem() {
  const [patient, setPatient] = useState('');
  const [amount, setAmount] = useState('');
  const [bills, setBills] = useState([
    { id: 1, patient: 'Ritika Saini', amount: '2450', method: 'UPI', status: 'Paid' },
    { id: 2, patient: 'Dev Malhotra', amount: '8600', method: 'Card', status: 'Pending' },
    { id: 3, patient: 'Sakshi Jain', amount: '1320', method: 'Cash', status: 'Paid' },
    { id: 4, patient: 'Imran Khan', amount: '4210', method: 'Insurance', status: 'Processing' }
  ]);

  const generateBill = () => {
    if (!patient || !amount) {
      return;
    }

    const newBill = {
      id: bills.length + 1,
      patient,
      amount,
      method: 'Cash',
      status: 'Paid'
    };

    setBills([...bills, newBill]);
    setPatient('');
    setAmount('');
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Billing System</h2>
        <div className="mini-stats">
          <div className="mini-stat-card">
            <h3>₹1,42,300</h3>
            <p>Collected This Month</p>
          </div>
          <div className="mini-stat-card">
            <h3>₹27,500</h3>
            <p>Pending Amount</p>
          </div>
          <div className="mini-stat-card">
            <h3>89%</h3>
            <p>Collection Rate</p>
          </div>
        </div>
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
              <div className="list-title">{bill.patient} - ₹{bill.amount}</div>
              <div className="list-subtitle">{bill.method} | {bill.status}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BillingSystem;