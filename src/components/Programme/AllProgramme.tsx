import { Row, Col, Popover, Tag } from "antd";
import Image from "next/image";
import Link from "next/link";

//Imports
import { EnvironmentFilled } from "@ant-design/icons";
import menu_dots from "../../../public/assets/menu_dots.svg";
import program_frame from "../../../public/assets/program_frame.png";
import trail_background_image from "../../../public/assets/trail_background_image.png";

const AllProgramme = () => {
  const content = (
    <div>
      <Link href={`/app/program-report/`} className="content-p">
        View
      </Link>
      <Link href={`/app/edit-program/`} className="content-p">
        Edit
      </Link>
      <Link href="" className="content-p">
        {" "}
        Delete
      </Link>
    </div>
  );

  return (
    <div className="program-container">
      <Row gutter={[20, 18]} className="program-section">
        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <div className="cardStyle">
            <div className="cardContainer">
              <div className="progImg">
                <Image
                  src={trail_background_image}
                  alt="Program Pics"
                  width={100}
                  height={100}
                />
              </div>
              <div className="rightContent">
                <div className="subRight1">
                  <h3 className="progName">Operation feed the nation</h3>
                  <Popover content={content} placement="bottom">
                    <Image src={menu_dots} alt="Menu" height="20" />
                  </Popover>
                </div>
                <div className="sdg">
                  <span>
                    <Tag color="orange">SDG1</Tag>
                  </span>
                  <span>
                    <Tag color="orange">SDG1</Tag>
                  </span>
                </div>
                <div className="location">
                  <EnvironmentFilled />
                  <span className="locStyle">lagos, Nigeria</span>
                </div>

                {/* <div className="subRight22">
                 
                  <div className="subRight2">
                    <span>
                      <Tag color="orange">SDG1</Tag>
                    </span>
                    <div className="locateStyle">
                      <EnvironmentFilled />
                      <span className="locStyle">lagos, Nigeria</span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <div className="cardStyle">
            <div className="cardContainer">
              <div className="progImg">
                <Image
                  src={trail_background_image}
                  alt="Program Pics"
                  width={100}
                  height={100}
                />
              </div>
              <div className="rightContent">
                <div className="subRight1">
                  <h3 className="progName">Operation feed the nation</h3>
                  <Popover content={content} placement="bottom">
                    <Image src={menu_dots} alt="Menu" height="20" />
                  </Popover>
                </div>
                <div className="sdg">
                  <span>
                    <Tag color="orange">SDG1</Tag>
                  </span>
                  <span>
                    <Tag color="orange">SDG1</Tag>
                  </span>
                </div>
                <div className="location">
                  <EnvironmentFilled />
                  <span className="locStyle">lagos, Nigeria</span>
                </div>

                {/* <div className="subRight22">
                 
                  <div className="subRight2">
                    <span>
                      <Tag color="orange">SDG1</Tag>
                    </span>
                    <div className="locateStyle">
                      <EnvironmentFilled />
                      <span className="locStyle">lagos, Nigeria</span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <div className="cardStyle">
            <div className="cardContainer">
              <div className="progImg">
                <Image
                  src={trail_background_image}
                  alt="Program Pics"
                  width={100}
                  height={100}
                />
              </div>
              <div className="rightContent">
                <div className="subRight1">
                  <h3 className="progName">Operation feed the nation</h3>
                  <Popover content={content} placement="bottom">
                    <Image src={menu_dots} alt="Menu" height="20" />
                  </Popover>
                </div>
                <div className="sdg">
                  <span>
                    <Tag color="orange">SDG1</Tag>
                  </span>
                  <span>
                    <Tag color="orange">SDG1</Tag>
                  </span>
                </div>
                <div className="location">
                  <EnvironmentFilled />
                  <span className="locStyle">lagos, Nigeria</span>
                </div>

                {/* <div className="subRight22">
                 
                  <div className="subRight2">
                    <span>
                      <Tag color="orange">SDG1</Tag>
                    </span>
                    <div className="locateStyle">
                      <EnvironmentFilled />
                      <span className="locStyle">lagos, Nigeria</span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AllProgramme;
