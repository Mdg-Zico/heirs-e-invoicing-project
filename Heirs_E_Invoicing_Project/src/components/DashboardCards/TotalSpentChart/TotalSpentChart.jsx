import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { monthlySpending } from "../../../services/spendingMock";
import "../DashboardCards.css";
import barChartIcon from "../../../assets/icons/bar_chart.svg"
function TotalSpentChart() {
  return (
    <div className="card chart-card">
    <div className="chart-header">
  <div className="chart-header-top">
    <h3>Total Spent</h3>
    <img src={barChartIcon} className="chart-icon" alt="" />
  </div>

  <span className="chart-amount">$682.5</span>
</div>


      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={monthlySpending}>
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar
            dataKey="amount"
            radius={[6, 6, 0, 0]}
            fill="#4B3CFA"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TotalSpentChart;
