import { ChangeEvent } from "react";
import FormFilter from "../FormFilter";
import CustomTable from "../Table/Table";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { Row, Col } from "antd";
import ButtonComponent from "../Buttons/Button";

interface Props {
  filterInputChange: () => void;
  filterText: any;
  showModal: () => void;
}

interface DataType {
  key: React.Key;
  structure_name: string;
  level_name: string;

  Action: React.ReactElement;
}

const OrgStructure = ({ filterInputChange, filterText, showModal }: Props) => {
  const columns: ColumnsType<DataType> = [
    {
      title: "Structure Name",
      dataIndex: "structure_name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Structure Name",
      dataIndex: "structure_name",
    },
    {
      title: "Level Name",
      dataIndex: "level_name",
    },
    {
      title: "Action",
      dataIndex: "Action",
    },
  ];
  const data: DataType[] = [
    {
      key: "1",
      structure_name: "Garden Ventures",
      level_name: "1",

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
      structure_name: "Garden Ventures",
      level_name: "2",
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
    <div className="dashboard-card">
      <Row className="rolePermVisible" gutter={[8, 8]}>
        <Col span={14}>
          <h3 className="card-title">
            <b>Organization Structure</b>
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
      {/* <h3>
            <b>Roles and Permission</b>
          </h3> */}

      {/* <div>
          <ButtonComponent className="updateButton" onClick={showModal}>
            <PlusOutlined /> Create
          </ButtonComponent>
        </div> */}

      <CustomTable data={data} columns={columns} />
    </div>
  );
};

export default OrgStructure;
