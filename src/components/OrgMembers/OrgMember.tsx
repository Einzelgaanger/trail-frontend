import { ChangeEvent } from "react";
import FormFilter from "../FormFilter";
import CustomTable from "../Table/Table";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { Row, Col } from "antd";
import ButtonComponent from "../Buttons/Button";

interface Props {
  filterInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  filterText: any;
  showModal: () => void;
}

interface DataType {
  key: React.Key;
  name: string;
  email: string;
  assign_edit: string;
  Action: React.ReactElement;
}
const OrgMember = ({ filterInputChange, filterText, showModal }: Props) => {
  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Assign & Edit",
      dataIndex: "assign_edit",
    },
    {
      title: "Action",
      dataIndex: "Action",
    },
  ];
  const data: DataType[] = [
    {
      key: "1",
      name: "Garden Ventures",
      email: "info@gardenventures.org",
      assign_edit: "Administrator",
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
      name: "Garden Ventures",
      email: "info@gardenventures.org",
      assign_edit: "Administrator",
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
      <div className="dashboard-card">
        <Row className="rolePermVisible" gutter={[8, 8]}>
          <Col span={14}>
            <h3 className="card-title">
              <b>Manage Organisation Member</b>
            </h3>
          </Col>
          <Col span={8}>
            <FormFilter
              onChange={filterInputChange}
              placeholder="search"
              filterText={filterText}
            />
          </Col>
          <Col span={2}>
            <ButtonComponent className="updateButton" onClick={showModal}>
              <PlusOutlined /> Create
            </ButtonComponent>
          </Col>
        </Row>
        <CustomTable data={data} columns={columns} />
      </div>
    </>
  );
};

export default OrgMember;
