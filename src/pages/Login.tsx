"use client";
import { useState } from "react";
import { Row, Col } from "antd";

import { Login } from "@/types/Auth";
import { LoginForm } from "@/components/Forms/LoginForm";

const Login = () => {
  const [formData, setFormData] = useState<Login>({
    email: "",
    password: "",
    user_type: "organisation_user",
  });
  const [isActive, setIsActive] = useState<boolean>(true);
  const onChangeForm = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleUserType = () => {
    setIsActive(!isActive);
  };
  const accountTypeOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, user_type: e.target.value });
  };

  const onSubmitForm = () => {
    console.log("submit");
  };
  return (
    <div>
      <Row className="auth__row">
        <Col xs={{ span: 20 }} lg={{ span: 24 }}>
          <LoginForm
            formData={formData}
            isActive={isActive}
            onChangeForm={onChangeForm}
            toggleUserType={toggleUserType}
            accountTypeOnChange={accountTypeOnChange}
            onSubmitForm={onSubmitForm}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Login;
