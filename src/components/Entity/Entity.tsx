import { ChangeEvent } from "react";
import CustomTable from "../Table/Table";
import ButtonComponent from "../Buttons/Button";
import FormFilter from "../FormFilter";

import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  ExportOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { Row, Col, Button } from "antd";
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
const Entity = ({ filterInputChange, filterText, showModal }: Props) => {
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
      <div className="dashboard-card" style={{ margin: "15px 0px" }}>
        <Row gutter={[8, 8]} className="rolePermVisible">
          <Col span={9}>
            <h3 className="card-title">Manage organisation Members</h3>
          </Col>
          <Col span={8}>
            <FormFilter
              onChange={filterInputChange}
              placeholder="search for goals and indicators"
              filterText={filterText}
            />
          </Col>
          <Col span={2}>
            <ButtonComponent
              htmlType="button"
              type={"primary"}
              className="updateButton"
              onClick={showModal}
            >
              <PlusOutlined />
              Create
            </ButtonComponent>
          </Col>
          <Col span={2}>
            <ButtonComponent
              htmlType="button"
              className="btn-extra"
              style={{ background: "#fff", border: "1px solid #707070" }}
            >
              <ExportOutlined />
              Export
            </ButtonComponent>
          </Col>
          <Col span={2}>
            <ButtonComponent
              htmlType="button"
              className="btn-extra"
              style={{ background: "#fff", border: "1px solid #707070" }}
            >
              {" "}
              <FilterOutlined />
              Filter
            </ButtonComponent>
          </Col>
          {/* <Col span={3}>
            {pagination && (
              <Pagination
                current={pagination.currentPage}
                size="small"
                pageSizeOptions={pageSizeOption}
                total={
                  (+pagination.totalPages || 0) * (+pagination?.limit || 0)
                }
                onChange={handlePageChange}
              />
            )}
          </Col> */}
        </Row>
        <CustomTable data={data} columns={columns} />
      </div>
    </>
  );
};

export default Entity;
