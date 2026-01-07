import React from "react";
import Image from "next/image";
import { Row, Col } from "antd";
import FormFilter from "@/components/FormFilter";
import ButtonComponent from "@/components/Buttons/Button";
import { PlusOutlined } from "@ant-design/icons";
import program_frame from "../../../../public/assets/program_frame.png";

interface Props {
  filterInputChange: () => void;
  filterText: any;
}

const CustomGoals = ({ filterText, filterInputChange }: Props) => {
  return (
    <>
      <Row className="rolePermVisible" gutter={[8, 32]}>
        <Col span={12}>
          <h3 className="card-title">Create Custom Goal</h3>
        </Col>
        <Col span={8}>
          <FormFilter
            onChange={filterInputChange}
            placeholder="search"
            filterText={filterText}
          />
        </Col>
        <Col span={4}>
          <ButtonComponent className="updateButton">
            <PlusOutlined /> Create Cutom Goal
          </ButtonComponent>
        </Col>
        {/* <Col span={1}>hello</Col> */}
      </Row>
      <Row gutter={[20, 20]}>
        <Col xs={{ span: 24 }} lg={{ span: 6 }}>
          <div className="cardStyle">
            <div className="cardContainer">
              <div className="goalImg">
                <Image
                  src={program_frame}
                  alt="Program Pics"
                  width={100}
                  height={100}
                />
              </div>
              <div className="rightContent">
                <h3 className="goalName">Digital Literacy Skill</h3>

                {/* <div className="date"> */}
                <p>Created on: 16th March, 2023</p>
                {/* </div> */}
              </div>
            </div>
          </div>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 6 }}>
          <div className="cardStyle">
            <div className="cardContainer">
              <div className="goalImg">
                <Image
                  src={program_frame}
                  alt="Program Pics"
                  width={100}
                  height={100}
                />
              </div>
              <div className="rightContent">
                <h3 className="goalName">Digital Literacy Skill</h3>

                {/* <div className="date"> */}
                <p>Created on: 16th March, 2023</p>
                {/* </div> */}
              </div>
            </div>
          </div>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 6 }}>
          <div className="cardStyle">
            <div className="cardContainer">
              <div className="goalImg">
                <Image
                  src={program_frame}
                  alt="Program Pics"
                  width={100}
                  height={100}
                />
              </div>
              <div className="rightContent">
                <h3 className="goalName">Digital Literacy Skill</h3>

                {/* <div className="date"> */}
                <p>Created on: 16th March, 2023</p>
                {/* </div> */}
              </div>
            </div>
          </div>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 6 }}>
          <div className="cardStyle">
            <div className="cardContainer">
              <div className="goalImg">
                <Image
                  src={program_frame}
                  alt="Program Pics"
                  width={100}
                  height={100}
                />
              </div>
              <div className="rightContent">
                <h3 className="goalName">Digital Literacy Skill</h3>

                {/* <div className="date"> */}
                <p>Created on: 16th March, 2023</p>
                {/* </div> */}
              </div>
            </div>
          </div>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 6 }}>
          <div className="cardStyle">
            <div className="cardContainer">
              <div className="goalImg">
                <Image
                  src={program_frame}
                  alt="Program Pics"
                  width={100}
                  height={100}
                />
              </div>
              <div className="rightContent">
                <h3 className="goalName">Digital Literacy Skill</h3>

                {/* <div className="date"> */}
                <p>Created on: 16th March, 2023</p>
                {/* </div> */}
              </div>
            </div>
          </div>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 6 }}>
          <div className="cardStyle">
            <div className="cardContainer">
              <div className="goalImg">
                <Image
                  src={program_frame}
                  alt="Program Pics"
                  width={100}
                  height={100}
                />
              </div>
              <div className="rightContent">
                <h3 className="goalName">Digital Literacy Skill</h3>

                {/* <div className="date"> */}
                <p>Created on: 16th March, 2023</p>
                {/* </div> */}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CustomGoals;
