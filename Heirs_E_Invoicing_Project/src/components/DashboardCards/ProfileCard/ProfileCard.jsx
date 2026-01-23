import "../DashboardCards.css";
import avatar from "../../../assets/icons/Avatar.svg"; 
import LocationIcon from "../../../assets/icons/LocationIcon.svg"

function ProfileCard() {
  return (
    <div className="card profile-card">
      <div className="profile-top">
        <img src={avatar} alt="User Avatar" className="profile-avatar" />
      </div>

      <div className="profile-info">
        <h3 className="profile-name">Charles Robbie</h3>
        <p className="profile-location"><img src={LocationIcon} alt=""/>  New York, USA</p>
      </div>

      <div className="profile-stats">
        <div className="profile-stat">
          <span className="stat-number">28</span>
          <span className="stat-label">Projects</span>
        </div>
        <div className="profile-stat">
          <span className="stat-number">643</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="profile-stat">
          <span className="stat-number">76</span>
          <span className="stat-label">Following</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
