import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo">RFC SkillHub</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{textDecoration:"none"}}>
              <li>
                <DashboardIcon className="icon"/>
                <span>Dashboard</span>
              </li>
          </Link>
            <p className="title">LISTS</p>
            <Link to="/courses" style={{textDecoration:"none"}}>
              <li>
                <SchoolIcon className="icon"/>
                <span>Courses</span>
              </li>
            </Link>
            <Link to="/certifs" style={{textDecoration:"none"}}>
              <li>
                <WorkspacePremiumIcon className="icon"/>
                <span>Certifications</span>
              </li>
            </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
