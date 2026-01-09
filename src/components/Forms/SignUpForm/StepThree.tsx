"use client";
import Link from "next/link";
import Image from "next/image";
import logo_black from "../../../../public/assets/logo_black.png";
import { Form, Input, Checkbox, Row, Col, Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";

import { ISignUp } from "@/types/Auth";

interface Props {
  step: number;
  prevStep: () => void;
  formData: ISignUp;
}

const StepThree = ({ step, prevStep, formData }: Props) => {
  return (
    <>
      <div className="sign-up__top">
        <Link href={"/"}>
          <Image alt="Logo" src={logo_black} width="100" />
        </Link>
        <h3 className="sm-text-center">
          <span onClick={prevStep}>
            <LeftOutlined className="returnStep" />
          </span>
          Step 3 of 3: Set Password
        </h3>
        <p className="sm-text-center">Fill in your details to get started</p>
      </div>
      <div>
        <span>Password</span>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Confirm your Input" }]}
        >
          <Input.Password
            className="login__input"
            type="password"
            name="password"
            placeholder="Enter password"
            // value={password}
            // onChange={onChangeForm}
          />
        </Form.Item>
        <span>Confirm Password</span>
        <Form.Item
          name="password2"
          rules={[{ required: true, message: "Confirm your Input" }]}
        >
          <Input.Password
            className="login__input"
            type="password"
            name="password2"
            placeholder="Confirm Password"
            // value={password2}
            // onChange={onChangeForm}
          />
        </Form.Item>
        <Form.Item name="terms" valuePropName="checked">
          <Checkbox
            className="terms"
            // value={terms}
            // onChange={onTickTerms}
            // checked={terms ? true : false}
          >
            By clicking , you accept our{" "}
            <span className="terms-bold">Free 3 Months Trial</span> on Trail,{" "}
            <Link target="_blank" href="/privacy-policy">
              Terms & Conditions
            </Link>{" "}
            and our{" "}
            <Link target="_blank" href="/privacy-policy">
              Data Policy
            </Link>
          </Checkbox>
        </Form.Item>
        <Row className="signUp-button-row">
          <Col xs={{ span: 12 }} lg={{ span: 24 }}>
            <Form.Item>
              <Button
                htmlType="submit"
                className="login__btn"
                // disabled={!terms}
              >
                Create Account
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default StepThree;
