"use client";
import { Form, Input, Select, Row, Col, Button } from "antd";
import Image from "next/image";
import logo_black from "../../../../public/assets/logo_black.png";
import Link from "next/link";
import { ISignUp } from "@/types/Auth";
import ButtonComponent from "@/components/Buttons/Button";

const { Option } = Select;
interface Props {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  formData: ISignUp;
}
const StepOne = ({ step, nextStep, prevStep, formData }: Props) => {
  const { accountType } = formData;
  console.log(step, "step in stepOne");
  return (
    <>
      <div className="sign-up__top">
        <Link href={"/"}>
          <Image alt="Logo" src={logo_black} width="100" />
        </Link>
        <h3 className="sm-text-center">{`Step ${step} of 3: Organization Details`}</h3>
        <p className="sm-text-center">Fill in your details to get started</p>
      </div>

      <div>
        <span>Organization Name</span>
        <Form.Item name="name">
          <Input
            className="login__input"
            autoFocus={true}
            type="text"
            name="name"
            placeholder="Enter Organization"
            // value={name}
            // onChange={onChangeOrg}
          />
        </Form.Item>
        <span>Organization Website</span>
        <Form.Item name="website">
          <Input
            className="login__input2"
            autoFocus={true}
            type="text"
            name="website"
            placeholder="www.website.com"
            addonBefore="http://"
            // value={website}
            // onChange={onChangeOrg}
          />
        </Form.Item>
        <span>Organization Type</span>
        <Form.Item name="organizationType">
          <Select
            placeholder="Select an organization type"
            allowClear
            size="large"

            // value={type}
            // onChange={onOrganizationChange}
          >
            <Option value="agriculture">Agriculture</Option>
            <Option value="medicine">Medicine</Option>
            <Option value="charity">Charity</Option>
          </Select>
        </Form.Item>
      </div>
      <br />

      <Row className="org-next-button-row">
        <Col xs={{ span: 12 }} lg={{ span: 24 }}>
          <ButtonComponent
            onClick={nextStep}
            htmlType="button"
            className="updateButton"
          >
            Next
          </ButtonComponent>
        </Col>
      </Row>
    </>
  );
};

export default StepOne;
