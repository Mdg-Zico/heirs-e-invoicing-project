import "./StatCard.css";

function StatCard({ title, value, iconLeft, iconRight, rightIconType, highlight }) {
  return (
    <div className={`stat-card ${highlight ? "active-card" : ""}`}>

  
      {iconLeft && (
        <div className="stat-left">
          <img src={iconLeft} className="stat-icon-left" alt="" />
        </div>
      )}

     
      <div className="stat-center">
        <p className="stat-title">{title}</p>
        <h3 className="stat-value">{value}</h3>
      </div>

      {iconRight && (
        <div className="stat-right">
          <img
            src={iconRight}
            className={`stat-icon-right ${rightIconType}`}
            alt=""
          />
        </div>
      )}

    </div>
  );
}

export default StatCard;
