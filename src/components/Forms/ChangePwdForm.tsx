import React from "react";
import { Form, Row, Col, Input, Select } from "antd";
import ButtonComponent from "../Buttons/Button";
import { ChangeEvent } from "react";
import { IChangePwdForm } from "@/types/settings";

const { Option } = Select;
interface Props {
  onChangePwdInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmitForm: () => void;
  formData: IChangePwdForm;
}

const ChangePwdForm = ({ onChangePwdInput, onSubmitForm, formData }: Props) => {
  return (
    <>
      <Form layout={"vertical"} onFinish={onSubmitForm}>
        <Row gutter={[8, 8]}>
          <Col span={8}>
            <Form.Item name="verifyPwd" label="Verify Current Password">
              <Input.Password
                placeholder="Enter Password"
                type="password"
                name="verifyPwd"
                className="inputStyle"
                value={formData.verifyPwd}
                onChange={onChangePwdInput}
                required
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="newPwd" label="Enter new Password">
              <Input.Password
                placeholder="Enter new Password"
                type="password"
                name="newPwd"
                className="inputStyle"
                value={formData.newPwd}
                onChange={onChangePwdInput}
                required
              />
              <span>
                Password must contain one upper case character, 8 characters
                minimum and one special characters
              </span>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="confirmPwd" label="Confirm Password">
              <Input.Password
                placeholder="Confirm Password"
                type="password"
                name="confirmPwd"
                className="inputStyle"
                value={formData.confirmPwd}
                onChange={onChangePwdInput}
                required
              />
              <span>
                Password must contain one upper case character, 8 characters
                minimum and one special characters
              </span>
            </Form.Item>
          </Col>
        </Row>

        <Row style={{ marginTop: "25px" }}>
          <Col span={8}>
            <ButtonComponent htmlType="submit" className="updateButton">
              Update new Password
            </ButtonComponent>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default ChangePwdForm;
