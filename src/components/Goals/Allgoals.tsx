import { Row, Col, Popover, Tag } from "antd";
import Image from "next/image";
import program_frame from "../../../public/assets/program_frame.png";

const AllGoals = () => {
  return (
    <>
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

export default AllGoals;
