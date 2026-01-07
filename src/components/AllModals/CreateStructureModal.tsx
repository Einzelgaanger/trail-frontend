import Modals from "../Modal/Modals";
import { Row, Input, Col, Form, Card, Checkbox } from "antd";
import ButtonComponent from "../Buttons/Button";

interface Props {
  handleCancel: () => void;

  isModalVisible: boolean;
}
const CreateStructureModal = ({ handleCancel, isModalVisible }: Props) => {
  return (
    <Modals
      title={"Create Structure"}
      isModalOpen={isModalVisible}
      handleOk={handleCancel}
      handleCancel={handleCancel}
      modalwidth={"500px"}
      footer={[
        <span key={"cancel"} onClick={handleCancel} className="Modal-span">
          Cancel
        </span>,
        <ButtonComponent
          key={"save"}
          htmltype="submit"
          className="updateButton"
        >
          Save
        </ButtonComponent>,
      ]}
    >
      {/* <h3>Add Role</h3> */}
      <Form layout={"vertical"}>
        <Row>
          <Col xs={{ span: 24 }} lg={{ span: 24 }}>
            <Form.Item name="structureName" label="Structure Name">
              <Input
                placeholder="Enter Structure name"
                type="text"
                name="structureName"
                className="inputStyle"
                // value={formRolePerm.roleName}
                // onChange={onChangeRolePerm}
                required
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 24 }}>
            <Form.Item name="levelName" label="Enter Level">
              <Input
                placeholder="Enter Level"
                type="text"
                name="levelName"
                className="inputStyle"
                // value={formRolePerm.roleDescription}
                // onChange={onChangeRolePerm}
                required
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modals>
  );
};

export default CreateStructureModal;
