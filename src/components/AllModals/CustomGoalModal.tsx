import { Row, Col, Form, Input, Button } from "antd";
import Modals from "../Modal/Modals";
import ButtonComponent from "../Buttons/Button";
import Dropzone from "react-dropzone";
import { CloudDownloadOutlined, PlusOutlined } from "@ant-design/icons";
import { IIndicator } from "@/types/goals";
interface Props {
  handleCancel: () => void;
  isModalVisible: boolean;
  indicatorGoal: IIndicator;
  addIndicators: () => void;
}

const CustomGoalModal = ({
  isModalVisible,
  handleCancel,
  indicatorGoal,
  addIndicators,
}: Props) => {
  return (
    <Modals
      title={"Add Goal"}
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
      <h3>Programme Goal</h3>
      <Form layout={"vertical"}>
        <Row>
          <Col xs={{ span: 24 }} lg={{ span: 24 }}>
            <Form.Item name="goalName" label="Goal Name">
              <Input
                placeholder="Enter goal name"
                type="text"
                name="goalName"
                className="inputStyle"
                // value={formRolePerm.roleName}
                // onChange={onChangeRolePerm}
                required
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 24 }}>
            <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <span>Programme Cover</span>

                  <div {...getRootProps()} className="document-container">
                    <div className="cloud-icon">
                      <CloudDownloadOutlined className="icon" />
                    </div>

                    <div className="cloud-icon" {...getInputProps()}>
                      <CloudDownloadOutlined className="icon" />
                    </div>
                    <div className="flex-div">
                      <div className="upload-container">
                        <p>Upload your Document</p>
                        <span className="accept">SVG, PNG, JPG or GIF </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="4"
                          height="5"
                          viewBox="0 0 4 5"
                          fill="none"
                        >
                          <circle cx="2" cy="2.5" r="2" fill="#98A2B3" />
                        </svg>
                        <span className="accept margin-left">Max. 5MB</span>
                      </div>
                      <div>
                        <ButtonComponent
                          htmlType="button"
                          className="updateButton"
                        >
                          Upload
                        </ButtonComponent>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </Dropzone>
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
          {indicatorGoal &&
            indicatorGoal.map((ind, idx) => {
              return (
                <Col
                  xs={{ span: 24 }}
                  lg={{ span: 24 }}
                  // key={new Date().getTime()}
                  key={idx}
                >
                  <Form.Item name={`indicator ${idx}`} label="Indicators">
                    <Input
                      placeholder="Enter Indicator"
                      type="text"
                      name={`indicator ${idx}`}
                      className="inputStyle"
                      value={ind.indicator}
                      // onChange={onChangeRolePerm}
                      required
                    />
                  </Form.Item>
                </Col>
              );
            })}
        </Row>
        <Row>
          <Button
            type="text"
            style={{
              color: "#E26E40",
              backgroundColor: "#fff",
              marginBottom: "10px",
            }}
            onClick={addIndicators}
          >
            <PlusOutlined />
            Add Partner
          </Button>
        </Row>
      </Form>
    </Modals>
  );
};

export default CustomGoalModal;
