import { Row, Col, Form, Input, Switch, Checkbox } from "antd";
import Modals from "../Modal/Modals";
import ButtonComponent from "../Buttons/Button";
interface Props {
  handleCancel: () => void;

  isModalVisible: boolean;
}

const AddEventModal = ({ handleCancel, isModalVisible }: Props) => {
  return (
    <Modals
      title={"Add Event"}
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
          htmlType="submit"
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
            <Form.Item name="eventName" label="Event Name">
              <Input
                placeholder="Enter event name"
                type="text"
                name="eventName"
                className="inputStyle"
                // value={formRolePerm.roleName}
                // onChange={onChangeRolePerm}
                required
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 24 }}>
            <Form.Item name="eventLocation" label="Event location">
              <Input
                placeholder="Enter event location"
                type="text"
                name="eventLocation"
                className="inputStyle"
                // value={formRolePerm.roleName}
                // onChange={onChangeRolePerm}
                required
              />
            </Form.Item>
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 24 }}>
            <Form.Item name="eventDes" label="Event Description">
              <Input.TextArea
                className="inputStyle"
                placeholder="Enter event Description"
                name="eventDes"
                rows={4}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modals>
  );
};

export default AddEventModal;
