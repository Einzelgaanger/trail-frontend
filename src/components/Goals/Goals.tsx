import { Row, Col } from "antd";
import ButtonComponent from "../Buttons/Button";
import FormFilter from "../FormFilter";
import AllGoals from "./Allgoals";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import Link from "next/link";

interface Props {
  filterInputChange: () => void;
  filterText: any;
  showModal: () => void;
}

const Goals = ({ filterInputChange, filterText, showModal }: Props) => {
  return (
    <>
      <div className="dashboard-card">
        <Row className="rolePermVisible search-margin" gutter={[20, 18]}>
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <FormFilter
              onChange={filterInputChange}
              placeholder="search"
              filterText={filterText}
            />
          </Col>
          <Col span={9}></Col>

          <Col xs={{ span: 8 }} lg={{ span: 3 }}>
            <ButtonComponent className="updateButton" htmltype="button">
              <DeleteOutlined /> Remove Goal
            </ButtonComponent>
          </Col>

          <Col xs={{ span: 8 }} lg={{ span: 3 }}>
            <ButtonComponent
              className="updateButton"
              htmltype="button"
              type={"primary"}
              onClick={showModal}
            >
              <PlusOutlined /> Add New Goal
            </ButtonComponent>
          </Col>
          <Col span={0.5}></Col>
        </Row>

        <AllGoals />
      </div>
    </>
  );
};

export default Goals;
