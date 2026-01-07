"use client";

import { Tabs } from "antd";
import type { TabsProps } from "antd";

interface Props {
  children: React.ReactNode;
  rolesPermissions: React.ReactNode;
  orgPartner: React.ReactNode;
  orgMember: React.ReactNode;
  entity: React.ReactNode;
  orgStructure: React.ReactNode;
  changePwd: React.ReactNode;
}
const SettinsLayout = ({
  children,
  rolesPermissions,
  orgPartner,
  orgMember,
  entity,
  orgStructure,
  changePwd,
}: Props) => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "My Profile",
      children: children,
    },
    {
      key: "2",
      label: "Roles and Permission",
      children: rolesPermissions,
    },
    {
      key: "3",
      label: "Organisation Partner",
      children: orgPartner,
    },
    {
      key: "4",
      label: "Organisation Member",
      children: orgMember,
    },
    {
      key: "5",
      label: "Entity",
      children: entity,
    },
    {
      key: "6",
      label: "Organisation Structure",
      children: orgStructure,
    },
    {
      key: "7",
      label: "Change Password",
      children: changePwd,
    },
  ];
  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
};

export default SettinsLayout;
