"use client";
import React from "react";
import {
  AppstoreOutlined,
  FileDoneOutlined,
  SolutionOutlined,
  RightOutlined,
  DownOutlined,
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
    title: "Portfolio Overview",
    path: "/app/dashboard",
    icon: <AppstoreOutlined />,
  },

  {
    title: "Projects / Facilities",
    path: "/app/programme",
    icon: <FileDoneOutlined />,
    iconClosed: <RightOutlined style={{ fontSize: '11px', transition: 'transform 0.2s ease' }} />,
    iconOpened: <DownOutlined style={{ fontSize: '11px', transition: 'transform 0.2s ease' }} />,

    subNav: [
      {
        title: "All Projects",
        path: "/app/programme",
        // icon: <SolutionOutlined />,
        cName: "sub-nav",
      },
      {
        title: "Portfolio Drilldown",
        path: "/app/projects-drilldown",
        // icon: <SolutionOutlined />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "ESG Metrics & Standards",
    path: "/app/goals-indicator",
    icon: <AimOutlined />,
  },
  {
    title: "ESG Analytics",
    path: "/app/signals",
    icon: <SelectOutlined />,
  },
  {
    title: "PFI Submissions",
    path: "/app/form",
    icon: <SolutionOutlined />,
    iconClosed: <RightOutlined style={{ fontSize: '11px', transition: 'transform 0.2s ease' }} />,
    iconOpened: <DownOutlined style={{ fontSize: '11px', transition: 'transform 0.2s ease' }} />,

    subNav: [
      {
        title: "All Submissions",
        path: "/app/form",
        icon: <SolutionOutlined />,
        cName: "sub-nav",
      },
      {
        title: "Import & Validate",
        path: "/app/pfi-import",
        icon: <SolutionOutlined />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Green Taxonomy",
    path: "/app/green-taxonomy",
    icon: <AimOutlined />,
  },
  {
    title: "Carbon & Net Zero",
    path: "/app/carbon-netzero",
    icon: <SelectOutlined />,
  },
  {
    title: "Reports",
    path: "/app/reports",
    icon: <FileDoneOutlined />,
  },
  {
    title: "Settings",
    path: "/app/settings",
    icon: <UserAddOutlined />,
  },
];
export default SidebarData;
