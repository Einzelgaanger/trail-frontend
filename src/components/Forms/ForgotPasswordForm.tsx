import React from "react";
import { Form, Input, Row, Col, Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

import logo_black from "../../../public/assets/logo_black.png";
import { IForgotPassword } from "../../types/Auth";

interface Props {
  formData: IForgotPassword;
  onChangeForm: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  goToPreviousPath: () => void;
  onSubmitForm: () => void;
}

const ForgotPasswordForm = ({
  formData,
  onChangeForm,
  goToPreviousPath,
  onSubmitForm,
}: Props) => {
  return (
    <div className="login">
      <div className="login__top">
        <Link href={"/"}>
          <Image alt="Logo" src={logo_black} width="100" />
        </Link>
        <h3 className="sm-text-center">Forgot Password.</h3>
        <p className="sm-text-center">
          Enter your email to recover your password.
        </p>
      </div>
      <div className="forgot_pwd">
        <Form name="normal_login" onFinish={onSubmitForm}>
          <span>Email Address</span>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Confirm your Input" }]}
          >
            <Input
              className="login__input"
              placeholder="Enter email"
              type="email"
              name="email"
              autoFocus={true}
              value={formData.email}
              onChange={() => onChangeForm}
            />
          </Form.Item>
          <Row>
            <Col xs={{ span: 12 }} lg={{ span: 24 }}>
              <Form.Item>
                <Button type="primary" htmltype="submit" className="login__btn">
                  Recover Password
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <p className="go-back-link" onClick={goToPreviousPath}>
          <LeftOutlined className="icon" />
          Go Back To Login
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
