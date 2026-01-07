import { ChangeEvent } from "react";
import type { ColumnsType } from "antd/es/table";
import { Row, Col } from "antd";
import CustomTable from "../Table/Table";
import FormFilter from "../FormFilter";
import ButtonComponent from "../Buttons/Button";
import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  ExportOutlined,
  FilterOutlined,
} from "@ant-design/icons";

interface Props {
  filterInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  filterText: any;
  showModal: () => void;
}

interface DataType {
  key: React.Key;
  name: string;
  formula: string;
  kpi_category: string;
  assign_edit: string;
  Action: React.ReactElement;
}

const Kpi = ({ filterInputChange, filterText, showModal }: Props) => {
  const columns: ColumnsType<DataType> = [
    {
      title: "KPI Name",
      dataIndex: "name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Formula",
      dataIndex: "formula",
    },
    {
      title: "kPI Category",
      dataIndex: "kpi_category",
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
      formula: "info@gardenventures.org",
      kpi_category: "info@gardenventures.org",
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
      formula: "info@gardenventures.org",
      kpi_category: "info@gardenventures.org",
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
      <Row gutter={[8, 8]} className="rolePermVisible">
        <Col span={8}>
          <FormFilter
            onChange={filterInputChange}
            placeholder="search for goals and indicators"
            filterText={filterText}
          />
        </Col>
        <Col span={9}></Col>
        <Col span={2}>
          <ButtonComponent
            htmltype="button"
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
            htmltype="button"
            className="btn-extra"
            style={{ background: "#fff", border: "1px solid #707070" }}
          >
            <ExportOutlined />
            Export
          </ButtonComponent>
        </Col>
        <Col span={2}>
          <ButtonComponent
            htmltype="button"
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
    </>
  );
};

export default Kpi;
