import { IChangePwdForm } from "@/types/settings";
import { ChangeEvent } from "react";
import ChangePwdForm from "./Forms/ChangePwdForm";

interface Props {
  onChangePwdInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmitForm: () => void;
  formData: IChangePwdForm;
}
const ChangePwd = ({ onChangePwdInput, onSubmitForm, formData }: Props) => {
  return (
    <>
      <div className="dashboard-card" style={{ margin: "15px 0px" }}>
        <h3 className="card-title">
          <b>Change Password</b>
        </h3>
        <ChangePwdForm
          onChangePwdInput={onChangePwdInput}
          onSubmitForm={onSubmitForm}
          formData={formData}
        />
      </div>
    </>
  );
};

export default ChangePwd;
