import { useRef } from "react";
interface FilterFormProps {
  filterText: React.RefObject<HTMLInputElement>;
  filterInputChange: () => void;
}

const useFilterForm = (): FilterFormProps => {
  const filterText = useRef<HTMLInputElement>(null);

  const filterInputChange = () => {
    if (filterText.current?.value !== "") {
    } else {
    }
  };

  return { filterText, filterInputChange };
};

export default useFilterForm;
