"use client";
import {
  UserOutlined,
  UsergroupAddOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import { Radio } from "antd";
import Link from "next/link";
import Image from "next/image";

import logo_black from "../../public/assets/logo_black.png";

interface Props {
  isActive: boolean;

  toggleUserType: (name: string) => void;
  accountTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SignUpType = ({ isActive, toggleUserType, accountTypeChange }: Props) => {
  return (
    <div className="login">
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
        onChange={() => accountTypeChange}
        className="login__group"
      >
        <Radio.Button
          value="organisation_user"
          className={`login__group__button ${isActive ? "isActive" : ""}`}
          onClick={() => toggleUserType("organisation")}
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
          onClick={() => toggleUserType("personal")}
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
      <p className="sign-up__footer" style={{ color: "#8E8E8E" }}>
        Already have an account?{" "}
        <Link href="/" style={{ color: "#E26E40" }}>
          {" "}
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUpType;
