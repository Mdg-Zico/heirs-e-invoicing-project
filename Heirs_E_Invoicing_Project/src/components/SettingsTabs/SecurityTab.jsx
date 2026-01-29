import { useState } from "react";
import "./SettingsTabs.css";

function SecurityTab() {
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: ""
  });



  const handlePasswordChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdatePassword = () => {
    if (passwords.new !== passwords.confirm) {
      alert("New passwords do not match");
      return;
    }
    alert("Password updated successfully (mock)");
    setPasswords({ current: "", new: "", confirm: "" });
  };

  

  const handleLogoutAll = () => {
    alert("All active sessions logged out (mock)");
  };

  return (
    <div className="settings-tab">
      <h3>Security Settings</h3>
      <p className="tab-description">
        Manage your password
      </p>

      {/* Change Password */}
      <div className="security-section">
        <h4>Change Password</h4>

        <div className="form-group">
          <label>Current Password</label>
          <input
            type="password"
            name="current"
            value={passwords.current}
            onChange={handlePasswordChange}
          />
        </div>

        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            name="new"
            value={passwords.new}
            onChange={handlePasswordChange}
          />
        </div>

        <div className="form-group">
          <label>Confirm New Password</label>
          <input
            type="password"
            name="confirm"
            value={passwords.confirm}
            onChange={handlePasswordChange}
          />
        </div>

        <button className="primary-btn" onClick={handleUpdatePassword}>
          Update Password
        </button>
      </div>

     

      
    </div>
  );
}

export default SecurityTab;
