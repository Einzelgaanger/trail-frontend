import React from "react";
import Image from "next/image";

import Subtract from "../../../../public/assets/Subtract.png";
import ButtonComponent from "@/components/Buttons/Button";

const ProgrammeSucess = () => {
  return (
    <section className="programme-success">
      <Image src={Subtract} width={70} height={70} alt="success logo" />
      {/* <div className="programme-success__content"> */}
      <h3>Submitted successfully</h3>
      <p>{"You’ve"} successfully saved your programme</p>
      {/* </div> */}

      <ButtonComponent
        htmlType="button"

        // disabled={loading || setDisabled}
      >
        Back To Main Page
      </ButtonComponent>
    </section>
  );
};

export default ProgrammeSucess;
