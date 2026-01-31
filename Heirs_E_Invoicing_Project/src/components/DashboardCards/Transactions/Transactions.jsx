import { transactions } from "../../../services/transactionMock";
import publicTransport from "../../../assets/icons/publicTransport.svg";
import groceryStore from "../../../assets/icons/groceryStore.svg"
import publicTransport2 from "../../../assets/icons/publicTransport2.svg"
import "../DashboardCards.css";

const ICON_MAP = {
  transport: publicTransport,
  grocery: groceryStore,
  transport2: publicTransport2
};

function Transactions() {
  return (
    <div className="card transactions-card">
      <h3>Your transactions</h3>

      <div className="transactions-list">
        {transactions.map(tx => (
          <div key={tx.id} className="transaction-item">
            <div className="transaction-left">
              <img
                src={ICON_MAP[tx.type]}
                alt={tx.title}
                className="transaction-icon"
              />
              <div>
                <p className="transaction-title">{tx.title}</p>
                <span className="transaction-date">{tx.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="transaction-footer">
        <a href="#">View all →</a>
      </div>
    </div>
  );
}

export default Transactions;
