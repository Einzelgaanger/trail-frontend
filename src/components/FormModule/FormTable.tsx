import { ChangeEvent } from "react";
import { Row, Popover } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DownloadOutlined } from "@ant-design/icons";
import Image from "next/image";

import FormFilter from "../FormFilter";
import ButtonComponent from "../Buttons/Button";
import CustomTable from "../Table/Table";
import menu_dots from "../../../public/assets/menu_dots.svg";
interface Props {
  filterInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  filterText: any;
  showModal: () => void;
}

interface DataType {
  key: React.Key;
  name: string;
  link: string;

  Action: React.ReactElement;
}

const FormTable = ({ filterInputChange, filterText, showModal }: Props) => {
  const content = (
    <div>
      <p>View</p>
      <p>Archive</p>
      <p className="text-red">Delete</p>
    </div>
  );
  const columns: ColumnsType<DataType> = [
    {
      title: "Form Name",
      dataIndex: "name",
    },
    {
      title: "Form Link",
      dataIndex: "link",
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
      link: "info@gardenventures.org",

      Action: (
        <>
          <DownloadOutlined />,
          <Popover content={content} trigger={"click"}>
            <Image src={menu_dots} alt="menu_dots" width={10} />
          </Popover>
        </>
      ),
    },
    {
      key: "2",
      name: "Garden Ventures",
      link: "info@gardenventures.org",

      Action: (
        <>
          <DownloadOutlined />,
          <Popover content={content} trigger={"click"}>
            <Image src={menu_dots} alt="menu_dots" width={10} />
          </Popover>
        </>
      ),
    },
  ];
  return (
    <>
      <Row>
        <div className="flex items-center justify-between">
          <p className="text-3xl">Forms(10)</p>
          <div className="space-x-1 flex">
            <FormFilter
              onChange={filterInputChange}
              placeholder="search for goals and indicators"
              filterText={filterText}
            />
            <ButtonComponent htmlType={"button"} className="btn-outline">
              Import Data
            </ButtonComponent>
            <ButtonComponent htmlType={"button"} className="updateButton">
              Add new Form
            </ButtonComponent>
            <ButtonComponent
              htmlType={"button"}
              className="updateButton"
              disabled
            >
              Archive
            </ButtonComponent>
          </div>
        </div>
      </Row>
      <CustomTable data={data} columns={columns} />
    </>
  );
};

export default FormTable;
