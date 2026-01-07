import { useState } from "react";

type ModalHookReturnType = [
  boolean, // isModalVisible
  () => void, // showModal
  () => void // handleCancel
];

const useModal = (): ModalHookReturnType => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return [isModalVisible, showModal, handleCancel];
};

export default useModal;
