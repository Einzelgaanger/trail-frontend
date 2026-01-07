"use client";
import React from "react";
import {
  AppstoreOutlined,
  FileDoneOutlined,
  SolutionOutlined,
  DownOutlined,
  UpOutlined,
  AimOutlined,
  SelectOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const SidebarData = [
  {
    title: "Home",
    path: "/pre-dashboard",
    icon: <SelectOutlined />,
  },
  {
    title: "Overview",
    path: "/app/dashboard",
    icon: <AppstoreOutlined />,
  },

  {
    title: "Programmes",
    path: "/app/programme",
    icon: <FileDoneOutlined />,
    iconClosed: <DownOutlined />,
    iconOpened: <UpOutlined />,

    subNav: [
      {
        title: "All Programmes",
        path: "/app/programme",
        // icon: <SolutionOutlined />,
        cName: "sub-nav",
      },
      {
        title: "Archived Programmes",
        path: "/app/archived-program",
        // icon: <SolutionOutlined />,
        cName: "sub-nav",
      },
      {
        title: "New Programmes",
        path: "/app/programme/new-programme",
        // icon: <SolutionOutlined />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Goals & Indicator",
    path: "/app/goals-indicator",
    icon: <AimOutlined />,
  },
  {
    title: "Insight",
    path: "/app/signals",
    icon: <SelectOutlined />,
  },
  {
    title: "Forms Management",
    path: "/app/form",
    icon: <SolutionOutlined />,
    iconClosed: <DownOutlined />,
    iconOpened: <UpOutlined />,

    subNav: [
      {
        title: "Forms",
        path: "/app/forms",
        icon: <SolutionOutlined />,
        cName: "sub-nav",
      },
      {
        title: "Archive Forms",
        path: "/app/forms/get-achieve",
        icon: <SolutionOutlined />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Settings",
    path: "/app/settings",
    icon: <UserAddOutlined />,
  },
];
export default SidebarData;
