import "./ClientStats.css";

function ClientStats({ clients }) {
  const total = clients.length;
  const active = clients.filter(c => c.status === "Active").length;
  const pending = clients.filter(c => c.status === "Pending").length;
  const suspended = clients.filter(c => c.status === "Suspended").length;

  return (
    <div className="client-stats-grid">
      <div className="stat-card">
        <p className="stat-title">Total Clients</p>
        <h3 className="stat-value">{total}</h3>
      </div>

      <div className="stat-card">
        <p className="stat-title">Active</p>
        <h3 className="stat-value">{active}</h3>
      </div>

      <div className="stat-card">
        <p className="stat-title">Pending</p>
        <h3 className="stat-value">{pending}</h3>
      </div>

      <div className="stat-card">
        <p className="stat-title">Suspended</p>
        <h3 className="stat-value">{suspended}</h3>
      </div>
    </div>
  );
}

export default ClientStats;
