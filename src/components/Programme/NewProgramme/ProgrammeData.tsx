"use client";
import React from "react";
import { Form, Row, Col, Input, DatePicker } from "antd";
import moment from "moment";
import Dropzone from "react-dropzone";
import { CloudDownloadOutlined } from "@ant-design/icons";
import ButtonComponent from "@/components/Buttons/Button";

interface Props {
  nextStep: () => void;
  showModal1: () => void;
  showModal2: () => void;
}
const ProgrammeData = ({ nextStep, showModal1, showModal2 }: Props) => {
  const { RangePicker } = DatePicker;
  return (
    <>
      {/* <Divider orientation="right">Program Data</Divider> */}
      <Form name="normal_login">
        <Row gutter={[24, 30]}>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <span>Programme Name</span>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Confirm your Input" }]}
            >
              <Input
                className="inputStyle"
                placeholder="Enter Programme name"
                type="text"
                name="name"
                // value={name}
                // onChange={onChangeForm}
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <span>Programme Code</span>
            <Form.Item
              name="code"
              rules={[{ required: true, message: "Confirm your Input" }]}
            >
              <Input
                className="inputStyle"
                placeholder="Enter Programme code"
                type="text"
                name="code"
                // value={code}
                // onChange={onChangeForm}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[24, 30]}>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <span>Programme Budget</span>
            <Form.Item
              name="budget"
              rules={[{ required: true, message: "Confirm your Input" }]}
            >
              <Input
                className="inputStyle"
                placeholder="Enter Programme budget"
                type="number"
                name="budget"
                // value={budget}
                // onChange={onChangeForm}
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <span>Programme Location</span>
            <Form.Item
              name="location"
              rules={[{ required: true, message: "Confirm your Input" }]}
            >
              <Input
                className="inputStyle"
                placeholder="Enter Programme budget"
                type="number"
                name="budget"
                // value={budget}
                // onChange={onChangeForm}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[24, 30]}>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <span>Programme Duration</span>
            <RangePicker
              style={{ width: "100%", height: "40px" }}
              className="duration-full-width"
              format={"YYYY-MM-DD"}
              renderExtraFooter={() => (
                <>
                  <h3 style={{ marginBottom: "0px" }}>
                    Set milestone or Event
                  </h3>
                  <div style={{ marginTop: "0px" }}>
                    <small> {new Date().toDateString()}</small>
                  </div>

                  <ButtonComponent
                    htmlType="button"
                    className="updateButton"
                    onClick={showModal1}
                    // disabled={loading}
                  >
                    Add a milestone
                  </ButtonComponent>
                  <ButtonComponent
                    htmlType="button"
                    className="btn-outline"
                    onClick={showModal2}
                  >
                    Add an event
                  </ButtonComponent>
                </>
              )}
            />
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <span>No. of Beneficiaries</span>
            <Form.Item
              name="totalNumberOfBeneficiaries"
              rules={[{ required: true, message: "Confirm your Input" }]}
            >
              <Input
                className="inputStyle"
                placeholder="Enter Programme beneficiaries"
                type="number"
                name="totalNumberOfBeneficiaries"
                // value={totalNumberOfBeneficiaries}
                // onChange={onChangeForm}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[24, 30]}>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <span>Programme Description</span>
            <Form.Item
              name="description"
              rules={[{ required: true, message: "Confirm your Input" }]}
            >
              <Input.TextArea
                className="inputStyle"
                placeholder="Enter Programme description"
                name="description"
                rows={4}
                // value={description}
                // onChange={onChangeForm}
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <span>Entity</span>
            <Form.Item
              name="description"
              rules={[{ required: true, message: "Confirm your Input" }]}
            >
              <Input
                className="inputStyle"
                placeholder="Entity"
                name="entity"

                // value={description}
                // onChange={onChangeForm}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[24, 30]}>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
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
                        <ButtonComponent htmlType="button">
                          Upload
                        </ButtonComponent>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </Dropzone>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <span>Programme</span>
            <div className="document-container">
              <div className="cloud-icon">
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
                  <ButtonComponent>Upload</ButtonComponent>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Form>
      <Row className="sdg-group-button-container">
        <div className="d-flex">
          <ButtonComponent
            htmlType="button"
            className="btn-outline"

            // onClick={onCancelForm}
            // disabled={loading}
          >
            Cancel
          </ButtonComponent>
          <ButtonComponent htmlType="button" onClick={nextStep}>
            Next
          </ButtonComponent>
        </div>
      </Row>
    </>
  );
};

export default ProgrammeData;
