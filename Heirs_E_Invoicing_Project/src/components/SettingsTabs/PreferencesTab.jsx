import "./SettingsTabs.css";
import { useState } from "react";

function PreferencesTab() {
  const [prefs, setPrefs] = useState({
    theme: "light",
    compactMode: false,
    emailNotifications: true,
    clientsPerPage: 10,
    defaultSort: "desc",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPrefs({
      ...prefs,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="settings-tab preferences-tab">
      <h3>Preferences</h3>
      <p className="tab-description">
        Customize your dashboard experience
      </p>

      {/* Appearance */}
      <div className="preferences-section">
        <h4>Appearance</h4>

        <label className="pref-item">
          Theme
          <select name="theme" value={prefs.theme} onChange={handleChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>

        {/* <label className="pref-item checkbox">
          <input
            type="checkbox"
            name="compactMode"
            checked={prefs.compactMode}
            onChange={handleChange}
          />
          Compact layout
        </label> */}
      </div>

      {/* Data */}
      <div className="preferences-section">
        <h4>Data & Tables</h4>

        <label className="pref-item">
          Clients per page
          <select
            name="clientsPerPage"
            value={prefs.clientsPerPage}
            onChange={handleChange}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </label>

        <label className="pref-item">
          Default sort order
          <select
            name="defaultSort"
            value={prefs.defaultSort}
            onChange={handleChange}
          >
            <option value="desc">Newest first</option>
            <option value="asc">Oldest first</option>
          </select>
        </label>
      </div>

      <div className="tab-actions">
        <button className="primary-btn">Save Preferences</button>
      </div>
    </div>
  );
}

export default PreferencesTab;
