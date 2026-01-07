"use client";
import { useContext } from "react";
import { ExportOutlined } from "@ant-design/icons";

import SidebarData from "./SidebarData";
import SubMenu from "./SubMenu";
import { ThemeContext } from "@/Theme/ThemeProvider";

const SideBar = () => {
  const { theme } = useContext<any>(ThemeContext);
  const onLogout = () => {
    console.log("logout");
  };
  return (
    <>
      <div className="new-nav-container">
        <nav className={`new-sidebar-nav sidebar-nav-offcanvas ${theme}`}>
          <div className="sidebar-nav-container">
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}

            <div className="sidebar-footer" onClick={onLogout}>
              <span className="footer-icon">
                <ExportOutlined />
              </span>
              Log Out
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
