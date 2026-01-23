import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { monthlySpending } from "../../../services/spendingMock";
import "../DashboardCards.css";

function TotalSpentChart() {
  return (
    <div className="card chart-card">
      <div className="chart-header">
        <h3>Total Spent</h3>
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
