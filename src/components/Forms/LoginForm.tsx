"use client";
import React from "react";
import { Form, Input, Button, Row, Col, Spin, Radio } from "antd";
import Link from "next/link";
import Image from "next/image";
import {
  UserOutlined,
  UsergroupAddOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import logo_black from "../../../public/assets/logo_black.png";
import ButtonComponent from "../Buttons/Button";
import { Login } from "@/types/Auth";

interface Props {
  formData: Login;
  isActive: boolean;
  onChangeForm: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  toggleUserType: () => void;
  accountTypeOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSubmitForm: () => void;
}
export const LoginForm = ({
  formData,
  isActive,
  onChangeForm,
  toggleUserType,
  accountTypeOnChange,
  onSubmitForm,
}: Props) => {
  return (
    <div className="login">
      {/* {"loading " ? (
        <div className="loading-overlay">
          <Spin size="large" />
        </div>
      ) : null} */}
      <div className="login__top">
        <Link href={"/"}>
          <Image alt="Logo" src={logo_black} width="100" />
        </Link>
        <h3 className="sm-text-center">Welcome Back.</h3>
        <p className="sm-text-center">
          Select your user type before you login.
        </p>
      </div>

      <Radio.Group
        defaultValue=""
        onChange={() => accountTypeOnChange}
        className="login__group"
      >
        <Radio.Button
          value="organisation_user"
          className={`login__group__button ${isActive ? "isActive" : ""}`}
          onClick={() => toggleUserType()}
        >
          <div className="button-content-container">
            <div className="content-container">
              <UsergroupAddOutlined className="icon" />
              <CheckCircleFilled className="icon" />
            </div>
            <div className="button-content">
              <h2>As an Organisation</h2>
              <p>
                We are a team of users who would love to use Trail for a big
                project.
              </p>
            </div>
          </div>
        </Radio.Button>
        <Radio.Button
          value="generic_user"
          className={`login__group__button ${!isActive ? "isActive" : ""}`}
          onClick={() => toggleUserType()}
        >
          <div className="button-content-container">
            <div className="content-container">
              <UserOutlined className="icon" />
              <CheckCircleFilled className="icon" />
            </div>
            <div className="button-content">
              <h2>As an Individual</h2>
              <p>
                I want to use Trail for personal purpose nothing complicated.
              </p>
            </div>
          </div>
        </Radio.Button>
      </Radio.Group>

      <div>
        <Form name="normal_login" onFinish={onSubmitForm}>
          <span>Email</span>
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
              value={formData.password}
              onChange={() => onChangeForm}
            />
          </Form.Item>
          <Row>
            <Col xs={{ span: 12 }} lg={{ span: 24 }}>
              <Form.Item>
                <ButtonComponent htmltype="submit" className="updateButton">
                  Login
                </ButtonComponent>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <p>
          Forgot your{" "}
          <Link href="/forgot-password" style={{ color: "#d66f0f" }}>
            {" "}
            Password?
          </Link>
        </p>
        <p>
          {`Don't have an account?`}
          <Link
            // onClick={resetSignUpForm}
            href="/sign-up"
            style={{ color: "#d66f0f" }}
          >
            {" "}
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
