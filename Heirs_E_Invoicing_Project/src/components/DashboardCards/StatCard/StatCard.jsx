import "./StatCard.css"

function StatCard({ title, value, icon, highlight }) {
  return (
    <div className={`card stat-card ${highlight ? "active-card" : ""}`}>
      <p className="stat-title">{title}</p>
      <h3 className="stat-value">{value}</h3>
    </div>
  );
}

export default StatCard;
