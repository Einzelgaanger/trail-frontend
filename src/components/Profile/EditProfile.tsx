"use client";
import { Row, Col, Button, Form, Input, Space } from "antd";
import { EditOutlined } from "@ant-design/icons";
import Image from "next/image";
import pic from "../../../public/assets/pic.png";
import Link from "next/link";

const EditProfile = () => {
  return (
    <div className="dashboard-card">
      <Form layout="vertical">
        <div className="profileBox">
          <div className="profileSection">
            <div className="item1">
              <div className="imageStyle">
                <Image src={pic} alt="profile image" width={100} />
              </div>

              <div className="edit-btn">
                <span className="delete">Delete</span>
                <Button className="updateButton">
                  <span className="btn-link">Upload Picture</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3>Organisation Details</h3>

          <Row gutter={[24, 8]}>
            <Col xs={{ span: 12 }} md={{ span: 8 }}>
              <Form.Item label="Organiation Name">
                <Input
                  type="text"
                  style={inputStyle}
                  name="organisation_name"
                  // value={organisation_name}
                  // onChange={handleInputChange}
                />
              </Form.Item>
            </Col>
            <Col xs={{ span: 12 }} md={{ span: 8 }}>
              <Form.Item label="Organisation Type">
                <Input
                  type="text"
                  style={inputStyle}
                  name="organisation_type"
                  // value={organisation_type}
                  // onChange={handleInputChange}
                />
              </Form.Item>
            </Col>
            <Col xs={{ span: 12 }} md={{ span: 8 }}>
              <Form.Item label="Organisation Website">
                <Input
                  addonBefore="http://"
                  //   suffix=".com"
                  //   defaultValue="mysite"
                  style={inputStyle}
                  name="organisation_website"
                  // value={organisation_type}
                  // onChange={handleInputChange}
                />
              </Form.Item>
            </Col>
          </Row>
        </div>

        <h3>Personal Details</h3>
        <Row gutter={[24, 8]}>
          <Col xs={{ span: 12 }} md={{ span: 8 }}>
            <Form.Item label="FirstName">
              <Input
                type="text"
                style={inputStyle}
                name="firstName"
                // value={firstName}
                // onChange={handleInputChange}
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 8 }}>
            <Form.Item label="LastName">
              <Input
                type="text"
                style={inputStyle}
                name="lastName"
                // value={lastName}
                // onChange={handleInputChange}
              />
            </Form.Item>
          </Col>

          <Col xs={{ span: 12 }} md={{ span: 8 }}>
            <Form.Item label="Email">
              <Input
                type="email"
                style={inputStyle}
                name="email"
                // value={email}
                disabled
              />
            </Form.Item>
          </Col>
          <Col
            xs={{ span: 12 }}
            md={{ span: 8 }}
            className="country-code-container"
          >
            <Form.Item label="Phone number">
              <Input
                addonBefore={
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="12"
                      viewBox="0 0 20 12"
                      fill="none"
                    >
                      <path d="M5.5 1H10.5V12H5.5V1Z" fill="#E6E7E8" />
                      <path
                        d="M6.5 0C4.84325 0 4 1.23125 4 2.75V8.25C4 9.76875 4.84325 11 6.5 11H9.5V0H6.5ZM17.5 0H14.5V11H17.5C19.1567 11 20 9.76875 20 8.25V2.75C20 1.23125 19.1567 0 17.5 0Z"
                        fill="#128807"
                      />
                    </svg>
                    <span style={{ marginLeft: "5px", color: "#CACACA" }}>
                      +234
                    </span>
                  </>
                }
                style={inputStyle}
                name="phone"
                // value={phone}
                // onChange={handleInputChange}
              />
            </Form.Item>
          </Col>

          <Col xs={{ span: 12 }} md={{ span: 8 }}>
            <Form.Item label="Account type">
              <Input
                type="text"
                style={inputStyle}
                // value={
                //   !isEmpty(profile.organisations)
                //     ? "Organisation Account"
                //     : "Individual Account"
                // }
                disabled
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Button htmltype="submit" className="updateButton">
            {" "}
            Update information
          </Button>
        </Row>
      </Form>
    </div>
    // <div className="profile-container">
    //   <Form>
    //     <div className="profileBox">
    //       <div className="profileSection">
    //         <div className="item1">
    //           <div className="imageStyle">
    //             <Image src={pic} alt="profile image" width={100} />
    //           </div>
    //           {/* <div className="userText">hello</div> */}
    //           <div className="edit-btn">
    //             <Button className="updateButton">
    //               <Link href="/app/profile/edit" className="btn-link">
    //                 <EditOutlined />
    //                 <span>Edit Profile</span>
    //               </Link>
    //             </Button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="profileDetails">
    //       <h3>Organisation Details</h3>

    //       <Row gutter={[30, 6]}>
    //         <Col span={8}>
    //           <Form.Item label="Organiation Name">
    //             <Input
    //               type="text"
    //               style={inputStyle}
    //               name="organisation_name"
    //               // value={organisation_name}
    //               // onChange={handleInputChange}
    //             />
    //           </Form.Item>
    //         </Col>
    //         {/* <Col span={8}>
    //             <Form.Item label="Organisation Type">
    //               <Input
    //                 type="text"
    //                 style={inputStyle}
    //                 name="organisation_type"
    //                 value={organisation_type}
    //                 onChange={handleInputChange}
    //               />
    //             </Form.Item>
    //           </Col> */}
    //       </Row>
    //     </div>

    //     <Row>
    //       <Col xs={{ span: 12 }} md={{ span: 8 }}>
    //         <div className="profile_div">
    //           <h3 className="profile_sub">First name</h3>
    //           <span className="profile_span">{"Garden"}</span>
    //         </div>
    //       </Col>
    //       <Col xs={{ span: 12 }} md={{ span: 8 }}>
    //         <div className="profile_div">
    //           <h3 className="profile_sub">Last name</h3>
    //           <span>{"Ventures"}</span>
    //         </div>
    //       </Col>
    //       <Col xs={{ span: 12 }} md={{ span: 8 }}>
    //         <div className="profile_div">
    //           <h3 className="profile_sub">Email address</h3>
    //           <span>{"info@gardenventures.org"}</span>
    //         </div>
    //       </Col>
    //       <Col xs={{ span: 12 }} md={{ span: 8 }}>
    //         <div className="profile_div">
    //           <h3 className="profile_sub">Phone Number</h3>
    //           <span>{"08037476543"}</span>
    //         </div>
    //       </Col>
    //       <Col xs={{ span: 12 }} md={{ span: 8 }}>
    //         <div className="profile_div">
    //           <h3 className="profile_sub">Account Type</h3>
    //           <span>organisation</span>
    //         </div>
    //       </Col>
    //       <Col xs={{ span: 12 }} md={{ span: 8 }}>
    //         <div className="profile_div">
    //           <h3 className="profile_sub">Organization name</h3>
    //           <span>Garden Ventures</span>
    //         </div>
    //       </Col>
    //     </Row>
    //     <Row gutter={[30, 6]}>
    //       <Col span={8}>
    //         <Form.Item label="FirstName">
    //           <Input
    //             type="text"
    //             style={inputStyle}
    //             name="firstName"
    //             // value={firstName}
    //             // onChange={handleInputChange}
    //           />
    //         </Form.Item>
    //       </Col>
    //       <Col span={8}>
    //         <Form.Item label="LastName">
    //           <Input
    //             type="text"
    //             style={inputStyle}
    //             name="lastName"
    //             // value={lastName}
    //             // onChange={handleInputChange}
    //           />
    //         </Form.Item>
    //       </Col>
    //     </Row>
    //     <Row gutter={[24, 6]}>
    //       <Col span={8}>
    //         <Form.Item label="Email">
    //           <Input
    //             type="email"
    //             style={inputStyle}
    //             name="email"
    //             // value={email}
    //             disabled
    //           />
    //         </Form.Item>
    //       </Col>
    //       <Col span={8}>
    //         <Form.Item label="Phone number">
    //           <Input
    //             type="text"
    //             style={inputStyle}
    //             name="phone"
    //             // value={phone}
    //             // onChange={handleInputChange}
    //           />
    //         </Form.Item>
    //       </Col>
    //     </Row>
    //     <Row gutter={[30, 6]}>
    //       <Col span={8}>
    //         <Form.Item label="Account type">
    //           <Input
    //             type="text"
    //             style={inputStyle}
    //             // value={
    //             //   !isEmpty(profile.organisations)
    //             //     ? "Organisation Account"
    //             //     : "Individual Account"
    //             // }
    //             disabled
    //           />
    //         </Form.Item>
    //       </Col>
    //       <Col span={8} offset={4}>
    //         <div>
    //           <Button htmltype="submit" className="updateButton">
    //             {" "}
    //             Update information
    //           </Button>
    //         </div>
    //       </Col>
    //     </Row>
    //   </Form>
    // </div>
  );
};
const inputStyle = {
  height: "40px",
  fontSize: "0.9rem",
  borderColor: "#D7DCE0",
  border: "1px solid #D7DCE0",
};

export default EditProfile;
