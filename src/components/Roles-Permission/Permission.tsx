"use client";
import { Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AllRolesPermissionTb from "./AllRolesPermissionTb";
import ButtonComponent from "../Buttons/Button";
interface Props {
  showModal: () => void;
}

const Permission = ({ showModal }: Props) => {
  return (
    <>
      <div className="dashboard-card" style={{ margin: "15px 0px" }}>
        <div className="rolePermVisible">
          {/* <h3>
            <b>Roles and Permission</b>
          </h3> */}
          <h3 className="card-title">
            <b>Manage Roles</b>
          </h3>

          <ButtonComponent className="updateButton" onClick={showModal}>
            <PlusOutlined /> Add Role
          </ButtonComponent>
        </div>

        <Row>
          <AllRolesPermissionTb />
        </Row>
      </div>
    </>
  );
};

export default Permission;
