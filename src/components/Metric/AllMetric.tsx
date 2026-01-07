import { ChangeEvent } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Metric from "./Metric";

interface Props {
  filterInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  filterText: any;
  showModal: () => void;
}

const AllMetric = ({ filterInputChange, filterText, showModal }: Props) => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Metrics",
      children: (
        <Metric
          filterText={filterText}
          filterInputChange={filterInputChange}
          showModal={showModal}
        />
      ),
    },
    {
      key: "2",
      label: "Metrics Categories",
      //   children: Metrics,
    },
    {
      key: "3",
      label: "Metrics Unit",
      //   children: metric,
    },
  ];
  return (
    <div className="dashboard-card custom-tab">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default AllMetric;
