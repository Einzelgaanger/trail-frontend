import React from "react";
import { Checkbox, Row } from "antd";
import ButtonComponent from "@/components/Buttons/Button";
interface Props {
  nextStep: () => void;
  prevStep: () => void;
}

const IndicatorSelection = ({ nextStep, prevStep }: Props) => {
  const arr = new Array(10).fill("Job Allocation");
  return (
    <>
      <div className="sdg-group">
        {/* <div className="sdg-group-headings">
          <h3>Select SDG Indicators</h3>
        </div> */}

        <div className="indicator-group">
          <div>
            {<h3>Digital Literacy skills</h3>}
            <div className="indicator-container">
              {arr.map((indicator: any, i: number) => {
                return (
                  <div className="indicator-style" key={i}>
                    <Checkbox.Group className="indicator-style__checks">
                      <Checkbox value={"value"}>{indicator}</Checkbox>
                    </Checkbox.Group>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Row className="sdg-group-button-container">
        <div className="d-flex">
          <ButtonComponent
            htmltype="button"
            onClick={prevStep}
            className="btn-outline"

            // disabled={loading}
          >
            Back
          </ButtonComponent>
          <ButtonComponent
            htmltype="button"
            onClick={nextStep}

            // disabled={loading || setDisabled}
          >
            Next
          </ButtonComponent>
        </div>
      </Row>
    </>
  );
};

export default IndicatorSelection;
