import "../DashboardCards.css";

function Schedule({ date, items }) {
  return (
    <div className="card schedule-card">
      <div className="schedule-header">
        <h3>{date}</h3>
      </div>

      <div className="schedule-list">
        {items.map((item, index) => (
          <div key={index} className="schedule-item">
            <div className="schedule-line"></div>
            <div className="schedule-content">
              <p className="schedule-title">{item.title}</p>
              <span className="schedule-time">{item.time}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="schedule-footer">
        <a href="#">View all Tasks →</a>
      </div>
    </div>
  );
}

export default Schedule;