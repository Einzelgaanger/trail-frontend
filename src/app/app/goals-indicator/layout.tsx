"use client";

import { Tabs } from "antd";
import type { TabsProps } from "antd";
import {
  TableOutlined,
  ProjectOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
interface Props {
  children: React.ReactNode;
  kpi: React.ReactNode;
  metrics: React.ReactNode;
}

const GoalsLayout = ({ children, kpi, metrics }: Props) => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <>
          <TableOutlined style={{ marginRight: "5px" }} /> Goals
        </>
      ),
      children: children,
    },
    {
      key: "2",
      label: (
        <>
          <ProjectOutlined style={{ marginRight: "5px" }} /> KPIs
        </>
      ),
      children: kpi,
    },
    {
      key: "3",
      label: (
        <>
          <LineChartOutlined style={{ marginRight: "5px" }} /> Metrics
        </>
      ),
      children: metrics,
    },
  ];
  return (
    <>
      <Tabs defaultActiveKey="1" items={items} />
    </>
  );
};
export default GoalsLayout;
