import { Row, Col, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import Image from "next/image";
import pic from "../../../public/assets/pic.png";
import Link from "next/link";

import ButtonComponent from "../Buttons/Button";

interface Props {
  onClickEdit: () => void;
}
const ProfileRead = ({ onClickEdit }: Props) => {
  return (
    <div className="profile-container">
      <div className="profileBox">
        <div className="profileSection">
          <div className="item1">
            <div className="imageStyle">
              <Image src={pic} alt="profile image" width={100} />
            </div>
            {/* <div className="userText">hello</div> */}
            <div className="edit-btn">
              <Button className="updateButton" onClick={onClickEdit}>
                <EditOutlined />
                <span className="btn-link">Edit Profile</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="profileDetails">
        <h3>Basic Information</h3>

        <Row>
          <Col xs={{ span: 12 }} md={{ span: 8 }}>
            <div className="profile_div">
              <h3 className="profile_sub">First name</h3>
              <span className="profile_span">{"Garden"}</span>
            </div>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 8 }}>
            <div className="profile_div">
              <h3 className="profile_sub">Last name</h3>
              <span>{"Ventures"}</span>
            </div>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 8 }}>
            <div className="profile_div">
              <h3 className="profile_sub">Email address</h3>
              <span>{"info@gardenventures.org"}</span>
            </div>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 8 }}>
            <div className="profile_div">
              <h3 className="profile_sub">Phone Number</h3>
              <span>{"08037476543"}</span>
            </div>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 8 }}>
            <div className="profile_div">
              <h3 className="profile_sub">Account Type</h3>
              <span>organisation</span>
            </div>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 8 }}>
            <div className="profile_div">
              <h3 className="profile_sub">Organization name</h3>
              <span>Garden Ventures</span>
            </div>
          </Col>
        </Row>
      </div>
      <div className="profile-settings">
        <h3>Disable or delete Account</h3>
        <div className="dContent">
          <div className="dTop">
            <input
              type="radio"
              name="deletion_group"
              className="radioStyle"
              // onClick={() => handleDisable()}
            />
            <div className="accStyle">
              <h4 className="h4Style">Disable Account</h4>
              <p className="pStyle">
                You can restore your trail account if it was accidentally
                disabled for up to 30days after deactivation and all your data
                will be intact.
              </p>
            </div>
          </div>
          <br />
          <div className="dTop">
            <input type="radio" name="deletion_group" className="radioStyle" />
            <div className="accStyle">
              <h4 className="h4Style">Delete Account</h4>
              <p className="pStyle2">
                The account will no longer be available, an all data in the
                account will be permanently deleted
              </p>
            </div>
          </div>

          <div className="popModalStyle">
            <Button
              htmlType="button"
              // onClick={handleModal}
              className="updateButton"
            >
              {" "}
              Continue
            </Button>{" "}
            {/* <ButtonComponent htmlType={"button"}>continue</ButtonComponent> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileRead;
