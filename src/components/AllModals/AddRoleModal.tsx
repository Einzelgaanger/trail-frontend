import Modals from "../Modal/Modals";
import { Row, Input, Col, Form, Card, Checkbox } from "antd";
import ButtonComponent from "../Buttons/Button";

interface Props {
  handleCancel: () => void;

  isModalVisible: boolean;
}
const AddRoleModal = ({
  handleCancel,

  isModalVisible,
}: Props) => {
  const options = [
    "Create Questions",
    "Create Roles",
    "Create Forms",
    "Create Programs",
    "Create Indicator",
  ];
  return (
    <Modals
      title={"Add Role"}
      isModalOpen={isModalVisible}
      handleOk={handleCancel}
      handleCancel={handleCancel}
      modalwidth={"880px"}
      footer={[
        <span key={"cancel"} onClick={handleCancel} className="Modal-span">
          Cancel
        </span>,
        <ButtonComponent
          key={"save"}
          htmlType="submit"
          className="updateButton"
        >
          Add new role
        </ButtonComponent>,
      ]}
    >
      {/* <h3>Add Role</h3> */}
      <Form layout={"vertical"}>
        <Row>
          <Col xs={{ span: 24 }} lg={{ span: 24 }}>
            <Form.Item name="roleName" label="Role Name">
              <Input
                placeholder="Enter role name here"
                type="text"
                name="roleName"
                className="inputStyle"
                // value={formRolePerm.roleName}
                // onChange={onChangeRolePerm}
                required
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 24 }}>
            <Form.Item name="roleDescription" label="Role Description">
              <Input
                placeholder="Enter a short description for the role"
                type="text"
                name="roleDescription"
                className="inputStyle"
                // value={formRolePerm.roleDescription}
                // onChange={onChangeRolePerm}
                required
              />
            </Form.Item>
          </Col>
        </Row>
        <h4>
          <b>Permissions</b>
        </h4>

        <Row gutter={[16, 16]}>
          {/* {orgPermissions.map((perData: IorgPermissions, index: number) => {
            //{label:string, value:string}[]=[]
            const myDat: IcheckBoxClass[] = [];
            perData.permissions.map((per) => {
              let n = {
                label: per.name,
                value: per.codename,
              };
              return myDat.push(n);
            }); */}

          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <Card title={"Create"} className="role-card">
              <Checkbox.Group options={options} name={"create"} />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <Card title={"Create"} className="role-card">
              <Checkbox.Group options={options} name={"create"} />
            </Card>
          </Col>
        </Row>
      </Form>
    </Modals>
  );
};

export default AddRoleModal;
