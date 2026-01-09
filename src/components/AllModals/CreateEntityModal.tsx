import Modals from "../Modal/Modals";
import { Row, Input, Col, Form, Button } from "antd";
import ButtonComponent from "../Buttons/Button";
import { PlusOutlined } from "@ant-design/icons";

interface Props {
  handleCancel: () => void;
  isModalVisible: boolean;
  clickAdd: () => void;
  addEntity: () => void;
  entity: any;
  collapse: boolean;
}
const CreateEntityModal = ({
  handleCancel,
  isModalVisible,
  clickAdd,
  addEntity,
  entity,
  collapse,
}: Props) => {
  return (
    <Modals
      title={"Create Entity"}
      isModalOpen={isModalVisible}
      handleOk={handleCancel}
      handleCancel={handleCancel}
      modalwidth={"700px"}
      style={{ maxHeight: "80vh" }}
      footer={[
        <span key={"cancel"} onClick={handleCancel} className="Modal-span">
          Cancel
        </span>,
        <ButtonComponent
          key={"save"}
          htmlType="submit"
          className="updateButton"
        >
          Create Entity
        </ButtonComponent>,
      ]}
    >
      {/* <h3>Add Role</h3> */}
      <div
        className="modal-container"
        style={{ maxHeight: "100%", overflowY: "auto" }}
      >
        <Form layout={"vertical"}>
          <div>
            <div className="modal-header">
              <h3>Level 1</h3>
              <ButtonComponent
                htmlType="button"
                className="entity-btn"
                onClick={clickAdd}
              >
                <PlusOutlined />
                Add
              </ButtonComponent>
            </div>

            <div className={collapse ? "showForm" : "hideForm"}>
              {entity &&
                entity.map((partner: any, idx: number) => {
                  return (
                    <Row key={idx}>
                      <p>Entity {idx + 1}</p>
                      <Col xs={{ span: 24 }} lg={{ span: 24 }}>
                        <Form.Item name="name" label="Name">
                          <Input
                            placeholder="Enter Entity name"
                            type="text"
                            name="entityName"
                            className="inputStyle"
                            // value={formRolePerm.roleName}
                            // onChange={onChangeRolePerm}
                            required
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={{ span: 24 }} lg={{ span: 24 }}>
                        <Form.Item
                          name="default_dashboard"
                          label="Default Dashboard Report"
                        >
                          <Input
                            placeholder="Enter"
                            type="text"
                            name="default_dashboard"
                            className="inputStyle"
                            // value={formRolePerm.roleDescription}
                            // onChange={onChangeRolePerm}
                            required
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={{ span: 24 }} lg={{ span: 24 }}>
                        <Form.Item
                          name="default_dashboard_dataset"
                          label="Default Dashboard Report with Dataset"
                        >
                          <Input
                            placeholder="Enter Level"
                            type="text"
                            name="default_dashboard_dataset"
                            className="inputStyle"
                            // value={formRolePerm.roleDescription}
                            // onChange={onChangeRolePerm}
                            required
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={{ span: 24 }} lg={{ span: 24 }}>
                        <hr />
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
                  onClick={addEntity}
                >
                  <PlusOutlined />
                  Add Entity
                </Button>
              </Row>
            </div>
          </div>
          <div>
            <div className="modal-header">
              <h3>Level 2</h3>
              <ButtonComponent
                htmlType="button"
                className="entity-btn"
                onClick={clickAdd}
              >
                <PlusOutlined />
                Add
              </ButtonComponent>
            </div>

            <div className={collapse ? "showForm" : "hideForm"}>
              {entity &&
                entity.map((partner: any, idx: number) => {
                  return (
                    <Row key={idx}>
                      <p>Entity {idx + 1}</p>
                      <Col xs={{ span: 24 }} lg={{ span: 24 }}>
                        <Form.Item name="name" label="Name">
                          <Input
                            placeholder="Enter Entity name"
                            type="text"
                            name="entityName"
                            className="inputStyle"
                            // value={formRolePerm.roleName}
                            // onChange={onChangeRolePerm}
                            required
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={{ span: 24 }} lg={{ span: 24 }}>
                        <Form.Item
                          name="default_dashboard"
                          label="Default Dashboard Report"
                        >
                          <Input
                            placeholder="Enter"
                            type="text"
                            name="default_dashboard"
                            className="inputStyle"
                            // value={formRolePerm.roleDescription}
                            // onChange={onChangeRolePerm}
                            required
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={{ span: 24 }} lg={{ span: 24 }}>
                        <Form.Item
                          name="default_dashboard_dataset"
                          label="Default Dashboard Report with Dataset"
                        >
                          <Input
                            placeholder="Enter Level"
                            type="text"
                            name="default_dashboard_dataset"
                            className="inputStyle"
                            // value={formRolePerm.roleDescription}
                            // onChange={onChangeRolePerm}
                            required
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={{ span: 24 }} lg={{ span: 24 }}>
                        <hr />
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
                  onClick={addEntity}
                >
                  <PlusOutlined />
                  Add Entity
                </Button>
              </Row>
            </div>
          </div>
        </Form>
      </div>
    </Modals>
  );
};

export default CreateEntityModal;
