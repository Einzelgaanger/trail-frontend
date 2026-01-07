"use client";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import CustomTable from "../Table/Table";
import type { ColumnsType } from "antd/es/table";

interface TableProps {
  data: DataType[];
  columns: ColumnsType<DataType>;
}

interface DataType {
  key: React.Key;
  Role_name: string;
  Description: string;
  Creation_date: string;
  Action: React.ReactElement;
}

const AllRolesPermissionTb = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: "Role Name",
      dataIndex: "Role_name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Description",
      dataIndex: "Description",
    },
    {
      title: "Creation Date",
      dataIndex: "Creation_date",
    },
    {
      title: "Action",
      dataIndex: "Action",
    },
  ];
  const data: DataType[] = [
    {
      key: "1",
      Role_name: "Administrator",
      Description:
        "The administrator role is responsible for administering the organizationand has all permissions within the organization",
      Creation_date: "May 29, 2023 03:49PM",
      Action: (
        <div className="tableStyle">
          <span className="popEdit">
            <EditOutlined />
          </span>
          <span className="trashStyle">
            <DeleteOutlined className="trashCan" />
          </span>
        </div>
      ),
    },
    {
      key: "2",
      Role_name: "Viewer",
      Description:
        "The administrator role is responsible for administering the organization and has all permissions within the organization",
      Creation_date: "May 29, 2023 03:49PM",
      Action: (
        <div className="tableStyle">
          <span className="popEdit">
            <EditOutlined />
          </span>
          <span className="trashStyle">
            <DeleteOutlined className="trashCan" />
          </span>
        </div>
      ),
    },
  ];
  return (
    <>
      <CustomTable data={data} columns={columns} />

      {/* Modal Display here ... */}
      {/* <ImportModal
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
        modalLayoutType={"role-permission"}
        modalWidth={"880px"}
        orgPermissions={orgPermissions}
        orgSingleRolePerm={orgSingleRolePerm}
        onChooseEditRolePerm={onChooseEditRolePerm}
        onCheckAllEdit={onCheckAllEdit}
        onSubmitEditRolePerm={onSubmitEditRolePerm}
        editRolePermFormat={editRolePermFormat}
        loading={loading}
      /> */}
    </>
  );
};

export default AllRolesPermissionTb;
