import { Row, Col, Form, Input, Switch, Checkbox } from "antd";
import Modals from "../Modal/Modals";
import ButtonComponent from "../Buttons/Button";

interface Props {
  handleCancel: () => void;

  isModalVisible: boolean;
}

const AddMilestone = ({ handleCancel, isModalVisible }: Props) => {
  return (
    <Modals
      title={"Add Milestone"}
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
      <p> {new Date().toDateString()}</p>
      {/* <h3>Add Role</h3> */}
      <Form layout={"vertical"}>
        <Row>
          <Col xs={{ span: 24 }} lg={{ span: 24 }}>
            <Form.Item name="milestoneName" label="Milestone Name">
              <Input
                placeholder="Enter milestone name"
                type="text"
                name="milestoneName"
                className="inputStyle"
                // value={formRolePerm.roleName}
                // onChange={onChangeRolePerm}
                required
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 24 }}>
            <Form.Item name="milestoneDes" label="  Milestone Description">
              <Input.TextArea
                className="inputStyle"
                placeholder="Enter milestone Description"
                name="milestoneDes"
                rows={4}
              />
            </Form.Item>
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 24 }}>
            {/* <Form.Item name="Fund disbursement" label="Fund disbursement">
              <Switch defaultChecked />
            </Form.Item> */}
            <div className="disburse-flex">
              <p>Fund disbursement</p>
              <Switch defaultChecked />
            </div>
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 24 }}>
            <Form.Item name="fundDisbursement" label="Fund disbursement">
              <Input
                placeholder="Enter Level"
                type="text"
                name="fundDisbursement"
                className="inputStyle"
                // value={formRolePerm.roleDescription}
                // onChange={onChangeRolePerm}
                required
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 24 }}>
            <Checkbox>Notify</Checkbox>
          </Col>
        </Row>
      </Form>
    </Modals>
  );
};

export default AddMilestone;
