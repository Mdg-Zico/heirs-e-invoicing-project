import "./StatCard.css";

function StatCard({ title, value, iconLeft, iconRight, rightIconType, highlight }) {
  return (
    <div className={`stat-card ${highlight ? "active-card" : ""}`}>

      {/* LEFT ICON (main icon like people, bars, earnings) */}
      {iconLeft && (
        <div className="stat-left">
          <img src={iconLeft} className="stat-icon-left" alt="" />
        </div>
      )}

      {/* CENTER CONTENT */}
      <div className="stat-center">
        <p className="stat-title">{title}</p>
        <h3 className="stat-value">{value}</h3>
      </div>

      {/* RIGHT ICON (trend / wave etc, individually sized by type) */}
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
