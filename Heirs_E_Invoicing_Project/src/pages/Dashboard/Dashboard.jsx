import "../PageLayout/PageLayout.css"
import "./Dashboard.css"
import Sidebar from "../../components/Sidebar/Sidebar.jsx"
import SearchIcon from "../../components/SearchIcon/SearchIcon.svg"
import StatCard from "../../components/DashboardCards/StatCard/StatCard.jsx";
import { stats } from "../../services/dashboardMock.js";
import TotalSpentChart from "../../components/DashboardCards/TotalSpentChart/TotalSpentChart.jsx"
import ProfileCard from "../../components/DashboardCards/ProfileCard/ProfileCard.jsx";
import MonthlySpend from "../../components/DashboardCards/MonthlySpend/MonthlySpend.jsx";
import Transactions from "../../components/DashboardCards/Transactions/Transactions.jsx";
import Schedule from "../../components/DashboardCards/Schedule/Schedule.jsx";
import { scheduleData } from "../../services/scheduleDataMock.js";


const email = localStorage.getItem("userEmail");
const firstName = email ? email.split("@")[0].split(".")[0] : "";
function Dashboard() {
  return (

  <div className="page-container dashboard-layout">
    <Sidebar/>
      <div className="dashboard-main">
         <div className="dashboard-header">
            <div className="header-text">
              <p className="greeting">Hi {firstName.charAt(0).toUpperCase() + firstName.slice(1)},</p>
              <h2>Welcome to Venus!</h2>
            </div>

            <div className="search-box">
              <img src={SearchIcon} className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search"
              />
            </div>
         </div>
          <div className="dashboard-grid">
              {/* Row 1: 4 Stat Cards */}
              

                {stats.map((item, index) => (
                  <StatCard
                    key={index}
                    title={item.title}
                    value={item.value}
                    iconLeft={item.iconLeft}
                    iconRight={item.iconRight}
                    rightIconType={item.rightIconType}
                    highlight={item.highlight}
                  />
                ))}




              {/* Row 2: Chart + Profile */}
              <TotalSpentChart />
              <ProfileCard />

              {/* Row 3: Monthly, Transactions, Schedule */}
              <MonthlySpend />
              <Transactions />
              
                <Schedule 
                  date={scheduleData.date} 
                  items={scheduleData.items} 
                />
              


          </div>

      </div>
    
  </div>

  )
  

}

export default Dashboard;


