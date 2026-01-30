import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Settings.css";
import "../PageLayout/PageLayout.css";

import ProfileTab from "../../components/SettingsTabs/ProfileTab";
import SecurityTab from "../../components/SettingsTabs/SecurityTab";
import PreferencesTab from "../../components/SettingsTabs/PreferencesTab";

function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="page-container dashboard-layout">
      <Sidebar />

      <div className="settings-main main-content">
        <div className="settings-header">
          <h2>Settings</h2>
          <p className="settings-subtitle">Manage your account and preferences</p>
        </div>

        <div className="settings-card">
          {/* Tabs */}
          <div className="settings-tabs">
            <button
              className={`tab ${activeTab === "profile" ? "active" : ""}`}
              onClick={() => setActiveTab("profile")}
            >
              Profile
            </button>

            <button
              className={`tab ${activeTab === "security" ? "active" : ""}`}
              onClick={() => setActiveTab("security")}
            >
              Security
            </button>

            <button
              className={`tab ${activeTab === "preferences" ? "active" : ""}`}
              onClick={() => setActiveTab("preferences")}
            >
              Preferences
            </button>
          </div>

          {/* Tab Content */}
          <div className="settings-content">
            {activeTab === "profile" && <ProfileTab />}
            {activeTab === "security" && <SecurityTab />}
            {activeTab === "preferences" && <PreferencesTab />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
