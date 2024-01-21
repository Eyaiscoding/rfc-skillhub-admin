import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">RFC SkillHub</span>
      </div>
      <hr />
      <div className="center">
        <ul>
        <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <SchoolIcon className="icon"/>
            <span>Courses</span>
          </li>
          <li>
            <WorkspacePremiumIcon className="icon"/>
            <span>Certifications</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
