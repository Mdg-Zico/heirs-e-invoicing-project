import bar from "../../../assets/icons/bar.svg";
import "../DashboardCards.css";
import "./MonthlySpend.css";

function MonthlySpend() {
  return (
    <div className=" card monthly-card monthly-earnings-card monthly-spend-card">

      <div className="monthly-header">
        <div className="monthly-top-row">
          <p className="monthly-title">Spent this month</p>
          <span className="monthly-percent">+2.45%</span>
        </div>

        <h3 className="monthly-value">$682.5</h3>

        <div className="monthly-status">
          <span className="status-check">✓</span>
          <span>On track</span>
        </div>
      </div>

   
      <img src={bar} alt="" className="monthly-chart" />

    </div>
  );
}

export default MonthlySpend;
