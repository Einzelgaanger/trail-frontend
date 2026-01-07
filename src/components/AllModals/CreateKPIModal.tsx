import { Row, Col, Form, Input, Select, Checkbox } from "antd";
import Modals from "../Modal/Modals";
import ButtonComponent from "../Buttons/Button";
interface Props {
  handleCancel: () => void;
  isModalVisible: boolean;
}
const { Option } = Select;
const CreateKPIModal = ({ handleCancel, isModalVisible }: Props) => {
  return (
    <Modals
      title={"Create KPI"}
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
            <Form.Item name="kpiName" label="Kpi Name">
              <Input
                placeholder="Enter kpi name"
                type="text"
                name="kpiName"
                className="inputStyle"
                // value={formRolePerm.roleName}
                // onChange={onChangeRolePerm}
                required
              />
            </Form.Item>
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <Form.Item name="kpiCategory" label="Kpi Category">
              <Select style={{ height: "40px" }}>
                <Option value="">select</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <Form.Item name="metric" label="Metric">
              <Input
                placeholder="Enter Level"
                type="text"
                name="metric"
                className="inputStyle"
                // value={formRolePerm.roleDescription}
                // onChange={onChangeRolePerm}
                required
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <Form.Item name="statType" label="Statistical Type">
              <Select style={{ height: "40px" }}>
                <Option value="">select</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 24 }}>
            <Checkbox>Select Parent Entity</Checkbox>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <Form.Item name="formula" label="Existing Formula/Expression">
              <Input
                placeholder="Enter formula"
                type="text"
                name="formula"
                className="inputStyle"
                // value={formRolePerm.roleDescription}
                // onChange={onChangeRolePerm}
                required
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <Form.Item name="date" label="Creation Date">
              <Input
                placeholder="Enter Level"
                type="date"
                name="date"
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

export default CreateKPIModal;
