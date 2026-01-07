"use client";
import { Form, Input, Select, Row, Col, Button } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import logo_black from "../../../../public/assets/logo_black.png";
import { ISignUp } from "@/types/Auth";

interface Props {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  formData: ISignUp;
}
const StepTwo = ({ step, nextStep, prevStep, formData }: Props) => {
  const { accountType } = formData;

  return (
    <>
      <div className="sign-up__top">
        <Link href={"/"}>
          <Image alt="Logo" src={logo_black} width="100" />
        </Link>
        <h3 className="sm-text-center">{`Step 2 of 3: Organization Details`}</h3>
        <p className="sm-text-center">Fill in your details to get started</p>
      </div>

      <span>First Name</span>
      <Form.Item
        name="firstName"
        rules={[{ required: true, message: "Confirm your Input" }]}
      >
        <Input
          className="login__input"
          autoFocus={true}
          placeholder="Enter First Name"
          type="text"
          name="firstName"
          //   value={firstName}
          //   onChange={onChangeForm}
        />
      </Form.Item>

      <span>Last Name</span>
      <Form.Item
        name="lastName"
        rules={[{ required: true, message: "Confirm your Input" }]}
      >
        <Input
          className="login__input"
          placeholder="Enter Last Name"
          type="text"
          name="lastName"
          //   value={lastName}
          //   onChange={onChangeForm}
        />
      </Form.Item>

      <span>{accountType === "personal" ? "Email" : "Organization Email"}</span>
      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input
          className="login__input"
          placeholder="Enter email"
          type="email"
          name="email"
          //   value={email}
          //   onChange={onChangeForm}
        />
      </Form.Item>
      {accountType === "organisation" && (
        <>
          <span>Alternative Email</span>
          <Form.Item
            name="altEmail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: false,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              className="login__input"
              placeholder="Enter alternate email"
              type="email"
              name="altEmail"
              //   value={altEmail}
              //   onChange={onChangeForm}
            />
          </Form.Item>
        </>
      )}
      <span>Phone Number</span>
      <Form.Item
        name="phone"
        rules={[{ required: true, message: "Confirm your Input" }]}
      >
        <Input
          className="login__input"
          placeholder="Enter phone number"
          type="number"
          name="phone"
          // value={phone}
          // onChange={onChangeForm}
        />
      </Form.Item>

      <br />
      <Row className="btnGroup">
        <Col xs={{ span: 12 }} lg={{ span: 12 }}>
          <Button className="Backbtn" onClick={prevStep}>
            <span>
              <ArrowLeftOutlined style={{ marginRight: "5px" }} />
            </span>{" "}
            Back
          </Button>
        </Col>
        <Col xs={{ span: 12 }} lg={{ span: 12 }}>
          <Button className="Nextbtn" onClick={nextStep}>
            <span>
              <ArrowRightOutlined style={{ marginRight: "5px" }} />
            </span>{" "}
            Next
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default StepTwo;
