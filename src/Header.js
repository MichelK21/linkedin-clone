import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';  
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="linkdinIcon"
          height={50}
          width={50}
        />
        <div className="header_search">
          <SearchIcon />
          <input type="text"
          placeholder="Search" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOptions Icon={HomeIcon} title="Home"/>
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
        <HeaderOptions Icon={ChatIcon} title="Messaging"/>
        <HeaderOptions Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOptions avatar="../assets/moi-bitmoji.png" />




      </div>


    </div>
  );
}

export default Header;
