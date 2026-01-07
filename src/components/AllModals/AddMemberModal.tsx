import { ChangeEvent } from "react";
import { Row, Col, Form, Input, Select } from "antd";
import Modals from "../Modal/Modals";
import ButtonComponent from "../Buttons/Button";
import { IOrgMemeberForm } from "@/types/settings";

const { Option } = Select;
interface Props {
  orgForm: any;
  orgUserForm: IOrgMemeberForm;
  onChangeOrgUserInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmitOrgUserForm: () => void;
  onChooseOrgUserRole: (value: string) => void;
  handleCancel: () => void;

  isModalVisible: boolean;
}
const AddMemberModal = ({
  orgForm,
  orgUserForm,
  onChangeOrgUserInput,
  onChooseOrgUserRole,
  onSubmitOrgUserForm,
  isModalVisible,
  handleCancel,
}: Props) => {
  return (
    <Modals
      title={"Invite Organization Members"}
      isModalOpen={isModalVisible}
      handleOk={handleCancel}
      handleCancel={handleCancel}
      modalwidth={"500px"}
      footer={[
        <span key={"camcel"} onClick={handleCancel} className="Modal-span">
          Cancel
        </span>,
        <ButtonComponent
          key={"save"}
          htmltype="submit"
          className="updateButton"
        >
          Create Member
        </ButtonComponent>,
      ]}
    >
      <Form layout={"vertical"} onFinish={onSubmitOrgUserForm} form={orgForm}>
        <Row gutter={[8, 8]}>
          <Col xs={{ span: 24 }} lg={{ span: 24 }}>
            <Form.Item name="firstname" label="First Name">
              <Input
                placeholder="First Name"
                type="text"
                name="firstName"
                className="inputStyle"
                value={orgUserForm.firstName}
                onChange={onChangeOrgUserInput}
                required
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 24 }}>
            <Form.Item name="lastname" label="Last Name">
              <Input
                placeholder="Last Name"
                type="text"
                name="lastName"
                className="inputStyle"
                value={orgUserForm.lastName}
                onChange={onChangeOrgUserInput}
                required
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 24 }}>
            <Form.Item name="email" label="Email Address">
              <Input
                placeholder="Email"
                type="email"
                name="email"
                className="inputStyle"
                // value={orgUserForm.email}
                // onChange={onChangeOrgUserInput}
                required
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 24 }} lg={{ span: 24 }}>
            <Form.Item label="Assign Role" name="roleId">
              <Select
                placeholder="Select a role"
                onChange={(value) => onChooseOrgUserRole(value)}
                value={orgUserForm.roleId}
                style={{ height: "40px" }}
              >
                <Option value="">option</Option>
                {/* {orgRoles &&
                  orgRoles.map((role: IorgRoles) => {
                    return (
                      <Option value={role.id} key={role.id}>
                        {role.name}
                      </Option>
                    );
                  })} */}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 24 }}>
            <Form.Item label="Entity" name="entity">
              <Select
                placeholder="Select entity"
                onChange={(value) => onChooseOrgUserRole(value)}
                value={orgUserForm.entity}
                style={{ height: "40px" }}
              >
                <Option value="">option</Option>
                {/* {orgRoles &&
                  orgRoles.map((role: IorgRoles) => {
                    return (
                      <Option value={role.id} key={role.id}>
                        {role.name}
                      </Option>
                    );
                  })} */}
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modals>
  );
};

export default AddMemberModal;
