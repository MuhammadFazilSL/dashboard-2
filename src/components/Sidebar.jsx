import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const Sidebar = (props) => {
  return (
    <>
      <div className="bars" style={props.expanded?{left: '40%'}:{left: '5%'}} onClick={()=>props.setExpaned(!props.expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={props.sidebarVariants}
    animate={window.innerWidth<=768?`${props.expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          Fas<span>h</span>ion
        </span>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={props.selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => props.setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
        {/* signoutIcon */}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;
