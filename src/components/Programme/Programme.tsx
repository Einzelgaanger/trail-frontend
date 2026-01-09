import { Row, Col } from "antd";
import ButtonComponent from "../Buttons/Button";
import FormFilter from "../FormFilter";
import AllProgramme from "./AllProgramme";
import { PlusOutlined } from "@ant-design/icons";
import Link from "next/link";

interface Props {
  filterInputChange: () => void;
  filterText: any;
}

const Programme = ({ filterInputChange, filterText }: Props) => {
  return (
    <>
      <div className="col-12">
        <Row className="rolePermVisible search-margin" gutter={[20, 18]}>
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <FormFilter
              onChange={filterInputChange}
              placeholder="search"
              filterText={filterText}
            />
          </Col>
          <Col span={8}></Col>

          <Col xs={{ span: 8 }} lg={{ span: 4 }}>
            <ButtonComponent className="updateButton" htmlType="button">
              <PlusOutlined /> Archive Project
            </ButtonComponent>
          </Col>
          <Col xs={{ span: 8 }} lg={{ span: 4 }}>
            <ButtonComponent
              className="updateButton"
              htmlType="button"
              type={"primary"}
            >
              <Link href="/app/projects-drilldown">
                {" "}
                <PlusOutlined />
                View All Projects
              </Link>
            </ButtonComponent>
          </Col>
        </Row>
        <div className="">
          <AllProgramme />
        </div>
      </div>
    </>
  );
};

export default Programme;
