"use client";
import React, { useState, useContext } from "react";
import { Drawer, Menu, Dropdown, Avatar, Switch } from "antd";
import { MenuFoldOutlined, UserOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

import logo_black from "../../../public/assets/logo_black.png";
import logo_white from "../../../public/assets/logo_white.png";
import { ThemeContext } from "@/Theme/ThemeProvider";

//Imports

//Imports

const Header = () => {
  const { theme, switchDark, switchLight } = useContext<any>(ThemeContext);
  const [visible, setVisible] = useState<boolean>(false);

  //Modal properties
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeKey, setActiveKey] = useState<any>("1");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setActiveKey("1");
  };
  const onChange = (key: string) => {
    setActiveKey(key);
  };
  const onKeyChange = (key: string) => {
    //converts the key to number and back to string
    let newkey = parseInt(key) + 1;
    if (parseInt(activeKey) >= 5) {
      setIsModalVisible(false);
      setActiveKey("1");
      return;
    }
    setActiveKey(newkey.toString());
  };

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onLogout = () => {
    console.log("logout");
  };
  const onDashboardClick = () => {
    console.log("Clicked");
    // props.history.push("/app/dashboard");
  };
  const onProgramClick = () => {
    console.log("Clicked");
    // props.history.push("/app/dashboard/projects");
  };
  const onManagerClick = () => {
    console.log("Clicked");
    // props.history.push("/app/dashboard/manager");
  };
  const onFormClick = () => {
    console.log("Clicked");
    // props.history.push("/app/dashboard/form");
  };
  const onProfile = () => {
    console.log("Clicked");
    // props.history.push("/app/profile");
  };
  const menu = (
    <Menu>
      <Menu.Item key="setting:4">
        <Link href="/app/profile" onClick={onProfile}>
          Profile
        </Link>
      </Menu.Item>
      <Menu.Item key="setting:6">
        <Link href="/app/change_password" onClick={onProfile}>
          Change Password
        </Link>
      </Menu.Item>
      <Menu.Item key="setting:7">
        <Link href="/app/account_settings" onClick={onProfile}>
          Account Settings
        </Link>
      </Menu.Item>
      <Menu.Item key="setting:5">
        <p onClick={onLogout} className="logout_p" style={{ fontSize: "13px" }}>
          Logout
        </p>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <nav className="navbar default-layout fixed-top d-flex flex-row">
        <div
          className={`text-center navbar-brand-wrapper d-flex align-items-top justify-content-center ${theme}`}
        >
          <div className="navbar-brand brand-logo">
            {theme === "dark" ? (
              <>
                <Image
                  src={logo_white}
                  alt="logo"
                  className="img-large"
                  width={100}
                  // style={{ width: "auto", height: "auto" }}
                />
              </>
            ) : (
              <>
                <Image
                  src={logo_black}
                  alt="logo"
                  className="img-large"
                  width={100}
                />
              </>
            )}
          </div>
          <div className="navbar-brand brand-logo-mini">
            <Image
              src={logo_white}
              alt="logo"
              className="img-mini"
              width={100}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center">
          <div className="svg">
            {theme === "dark" ? (
              <svg
                onClick={switchLight}
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: 18, width: 18, color: "#f7b402" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            ) : (
              <svg
                onClick={switchDark}
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: 18, width: 18, color: "#707070" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </div>

          <button className="helpGuide" htmltype="button" onClick={showModal}>
            <div className="iconLeft">
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM9 13H11V15H9V13ZM11 11.355V12H9V10.5C9 10.2348 9.10536 9.98043 9.29289 9.79289C9.48043 9.60536 9.73478 9.5 10 9.5C10.2841 9.49998 10.5623 9.4193 10.8023 9.26733C11.0423 9.11536 11.2343 8.89837 11.3558 8.64158C11.4773 8.3848 11.5234 8.0988 11.4887 7.81684C11.454 7.53489 11.34 7.26858 11.1598 7.04891C10.9797 6.82924 10.7409 6.66523 10.4712 6.57597C10.2015 6.48671 9.91204 6.47587 9.63643 6.54471C9.36081 6.61354 9.11042 6.75923 8.91437 6.96482C8.71832 7.1704 8.58468 7.42743 8.529 7.706L6.567 7.313C6.68863 6.70508 6.96951 6.14037 7.38092 5.67659C7.79233 5.2128 8.31952 4.86658 8.90859 4.67332C9.49766 4.48006 10.1275 4.44669 10.7337 4.57661C11.3399 4.70654 11.9007 4.99511 12.3588 5.41282C12.8169 5.83054 13.1559 6.36241 13.3411 6.95406C13.5263 7.54572 13.5511 8.17594 13.4129 8.78031C13.2747 9.38467 12.9785 9.9415 12.5545 10.3939C12.1306 10.8462 11.5941 11.1779 11 11.355Z"
                  fill="#24292E"
                />
              </svg>
            </div>
            <span>Help Guide</span>
          </button>
          <ul className="navbar-nav ml-auto navbar-ul">
            <li>
              <Dropdown overlay={menu} className="dropDownHidden">
                <Link className="nav-link dropdown-toggle" href="#">
                  {/* {image ? (
                    <Avatar
                      size={34}
                      src={image}
                      style={{ marginRight: "10px" }}
                    />
                  ) : ( */}
                  <Avatar
                    size={32}
                    icon={<UserOutlined />}
                    style={{ marginRight: "10px" }}
                  />
                  {/* )} */}
                  {/* {`${user && firstName} ${user && lastName}`} */}

                  {`Garden Ventures`}
                </Link>
              </Dropdown>
              <Drawer
                // title={`${user && firstName} ${user && lastName}`}
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
                style={{ zIndex: 9999, textAlign: "center" }}
              >
                <div className="drawerMenu">
                  <Link href="/app/dashboard" onClick={onDashboardClick}>
                    <span className="drawerMenu-span">Dashboard</span>
                  </Link>
                </div>
                <div className="drawerMenu">
                  <Link href="/app/programs" onClick={onProgramClick}>
                    <span className="drawerMenu-span">Program Report</span>
                  </Link>
                </div>
                <div className="drawerMenu">
                  <Link href="/app/dashboard/manager" onClick={onManagerClick}>
                    <span className="drawerMenu-span">Programme Manager</span>
                  </Link>
                </div>
                <div className="drawerMenu">
                  <Link href="/app/forms" onClick={onFormClick}>
                    <span className="drawerMenu-span">Forms</span>
                  </Link>
                </div>
                <div className="drawerMenu">
                  <p onClick={onLogout} className="logout_p">
                    Logout
                  </p>
                </div>
              </Drawer>
            </li>
          </ul>
          <button
            className="folderHidden"
            htmltype="button"
            data-toggle="offcanvas"
            onClick={showDrawer}
          >
            <MenuFoldOutlined className="menu-fold" />
          </button>
        </div>
      </nav>
      {/* Show Modal here */}
      {/* <ImportModal
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        modalLayoutType={"help-guide"}
        modalWidth={"950px"}
        activeKey={activeKey}
        handleNextClick={onKeyChange}
        onChange={onChange}
      /> */}
    </div>
  );
};
export default Header;
