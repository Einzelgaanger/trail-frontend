export type InvitePartnerFormData = {
  name: string;
  email: string;
  role: string;
};
export type IOrgMemeberForm = {
  firstName: string;
  lastName: string;
  email: string;
  roleId: string;
  entity: string;
};
export type IChangePwdForm = {
  verifyPwd: string;
  newPwd: string;
  confirmPwd: string;
};
