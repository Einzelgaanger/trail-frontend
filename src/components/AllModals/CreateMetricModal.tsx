import { Row, Col, Form, Input, Select, Checkbox } from "antd";
import Modals from "../Modal/Modals";
import ButtonComponent from "../Buttons/Button";
interface Props {
  handleCancel: () => void;
  isModalVisible: boolean;
}
const { Option } = Select;

const CreateMetricModal = ({ handleCancel, isModalVisible }: Props) => {
  return (
    <Modals
      title={"Create Metric"}
      isModalOpen={isModalVisible}
      handleOk={handleCancel}
      handleCancel={handleCancel}
      modalwidth={"700px"}
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
        <Row gutter={[20, 8]}>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <Form.Item name="metricName" label="Metric Name">
              <Input
                placeholder="Enter metric name"
                type="text"
                name="metricName"
                className="inputStyle"
                // value={formRolePerm.roleName}
                // onChange={onChangeRolePerm}
                required
              />
            </Form.Item>
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <Form.Item name="metricCategory" label="Metric Category">
              <Select style={{ height: "40px" }}>
                <Option value="">select</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <Form.Item name="metricType" label="Metric Type">
              <Input
                placeholder=""
                type="text"
                name="metricType"
                className="inputStyle"
                // value={formRolePerm.roleDescription}
                // onChange={onChangeRolePerm}
                required
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <Form.Item name="measurement" label="Unit of Measurement">
              <Select style={{ height: "40px" }}>
                <Option value="">select</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 24 }}>
            <Form.Item name="goalDes" label="Goal Description">
              <Input.TextArea
                className="inputStyle"
                placeholder="Enter goal Description"
                name="goalDes"
                rows={4}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modals>
  );
};

export default CreateMetricModal;
