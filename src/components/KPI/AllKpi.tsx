import { ChangeEvent } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Kpi from "./Kpi";

interface Props {
  filterInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  filterText: any;
  showModal: () => void;
}

const AllKpi = ({ filterInputChange, filterText, showModal }: Props) => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Kpi",
      children: (
        <Kpi
          filterText={filterText}
          filterInputChange={filterInputChange}
          showModal={showModal}
        />
      ),
    },
    {
      key: "2",
      label: "Kpi Categories",
      //   children: kpi,
    },
    {
      key: "3",
      label: "Kpi Commentaries",
      //   children: metric,
    },
  ];
  return (
    <div className="dashboard-card custom-tab">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default AllKpi;
