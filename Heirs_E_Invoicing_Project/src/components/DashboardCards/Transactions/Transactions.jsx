import { transactions } from "../../../services/transactionMock";
import "../DashboardCards.css";

function Transactions() {
  return (
    <div className="card transactions-card">
      <h3>Your transactions</h3>

      <div className="transactions-list">
        {transactions.map(tx => (
          <div key={tx.id} className="transaction-item">
            <div className="transaction-left">
              <span className="transaction-icon">{tx.icon}</span>
              <div>
                <p className="transaction-title">{tx.title}</p>
                <span className="transaction-date">{tx.date}</span>
              </div>
            </div>

            <span className="transaction-amount">{tx.amount}</span>
          </div>
        ))}
      </div>

      <div className="view-all">View all →</div>
    </div>
  );
}

export default Transactions;
