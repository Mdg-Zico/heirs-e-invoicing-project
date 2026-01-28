import { LineChart, Area, Line, ResponsiveContainer } from "recharts";
import barIcon from "../../../assets/icons/bar_chart.svg"
import waves from "../../../assets/icons/monthlySpendIcon.svg"
import "../DashboardCards.css";
import "./MonthlySpend.css"
import { currentMonthEarnings } from "../../../services/currentMonthEarnings";

function CurrentMonthEarnings() {
  return (
   <div className="card monthly-card monthly-earnings-card">
    <img src={barIcon} className="monthly-bar-icon"  />
  <div className="monthly-header">
    <p className="monthly-title">This month earnings</p>
    
  

  <h3 className="monthly-value">$682.5</h3>
  <span className="monthly-badge">+2.45%</span>
</div>
  
  
      <img className="svg" src={waves}  />
    
  
</div>

  );
}

export default CurrentMonthEarnings;
