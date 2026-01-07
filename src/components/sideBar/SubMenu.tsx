"use client";
import React, { useState, useContext } from "react";
import Link from "next/link";
import { SideBar } from "@/types/sidebar";
import { NavLink } from "../NavLink/NavLink";
import { ThemeContext } from "@/Theme/ThemeProvider";

const SubMenu = ({ item }: any) => {
  const { theme } = useContext<any>(ThemeContext);
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <div className="sidebar-menu">
      <NavLink
        href={item.path}
        exact
        className={`sidebar-menu-nav ${theme}`}
        onClick={item.subNav && showSubnav}
      >
        <div>
          <span className="sidebar-menu-icon">{item.icon}</span>
          <span className="sidebar-menu-title">{item.title}</span>
        </div>
        <span className="sidebar-menu-title-icon">
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </span>
      </NavLink>
      {subnav &&
        item.subNav.map((item: any, index: number) => {
          return (
            <NavLink
              href={item.path}
              key={index}
              className="sidebar-menu-dropdown"
              exact
            >
              <span className="active-icon"></span>
              <span className="dropdown-title">{item.title}</span>
            </NavLink>
          );
        })}
    </div>
  );
};

export default SubMenu;
