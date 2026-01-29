import { useState } from "react";
import "./SettingsTabs.css";

function ProfileTab() {
  const [profile, setProfile] = useState({
    fullName: "Admin User",
    email: "admin@mail.com",
    role: "System Administrator",
    phone: "+234 801 234 5678"
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    alert("Profile updated successfully (mock)");
  };

  return (
    <div className="settings-tab">
      <h3>Profile Information</h3>
      <p className="tab-description">Update your personal and account details</p>

      <div className="form-grid">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={profile.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            disabled
          />
        </div>

        <div className="form-group">
          <label>Role</label>
          <input
            type="text"
            name="role"
            value={profile.role}
            disabled
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="tab-actions">
        <button className="primary-btn" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default ProfileTab;
