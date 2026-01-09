import React from "react";
import Modals from "../Modal/Modals";
import { Row, Col, Form, Input, Button } from "antd";
import ButtonComponent from "../Buttons/Button";
import { InvitePartnerFormData } from "@/types/settings";
import { PlusOutlined } from "@ant-design/icons";

interface Props {
  partners: InvitePartnerFormData[];
  onSubmitForm: () => void;
  onChangeInput: (e: any) => void;
  formData: InvitePartnerFormData;
  addPartners: () => void;
  handleCancel: () => void;
  isModalVisible: boolean;
}

const AddPartnersModal = ({
  partners,
  onSubmitForm,
  onChangeInput,
  formData,
  addPartners,
  isModalVisible,
  handleCancel,
}: Props) => {
  return (
    <>
      <Modals
        title={"Invite Organization Members"}
        isModalOpen={isModalVisible}
        handleOk={handleCancel}
        handleCancel={handleCancel}
        modalwidth={"880px"}
        footer={[
          <span key={"camcel"} onClick={handleCancel} className="Modal-span">
            Cancel
          </span>,
          <ButtonComponent
            key={"save"}
            htmlType="submit"
            className="updateButton"
          >
            Add Partner
          </ButtonComponent>,
        ]}
      >
        <Form layout={"vertical"} onFinish={onSubmitForm}>
          {partners &&
            partners.map((partner: any, idx: number) => {
              return (
                <Row gutter={[16, 24]} key={idx}>
                  <Col span={8}>
                    <Form.Item label="Role">
                      <Input
                        type="text"
                        onChange={onChangeInput}
                        placeholder="Viewer"
                        name={`name`}
                        disabled
                        className="inputStyle"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Name"
                      rules={[{ required: true, message: "Name is required" }]}
                      name={`name${idx}`}
                    >
                      <Input
                        type="text"
                        onChange={onChangeInput}
                        placeholder="Enter Name"
                        value={formData.name}
                        name={`name`}
                        className="inputStyle"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label={"Email"}
                      rules={[{ required: true, message: "Email is required" }]}
                      name={`email${idx}`}
                    >
                      <Input
                        type="text"
                        placeholder="Email"
                        onChange={onChangeInput}
                        value={formData.email}
                        name={`email`}
                        className="inputStyle"
                      />
                    </Form.Item>
                  </Col>
                </Row>
              );
            })}
          <Row>
            <Button
              type="text"
              style={{
                color: "#E26E40",
                backgroundColor: "#fff",
                marginBottom: "10px",
              }}
              onClick={addPartners}
            >
              <PlusOutlined />
              Add Partner
            </Button>
          </Row>
        </Form>
      </Modals>
    </>
  );
};

export default AddPartnersModal;
