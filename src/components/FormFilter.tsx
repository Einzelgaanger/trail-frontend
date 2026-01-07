import React, { ChangeEvent } from "react";
import { SearchOutlined } from "@ant-design/icons";
interface Props {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  filterText: any;
}

const FormFilter = ({ placeholder, onChange, filterText }: Props) => {
  return (
    <form className="search_form" style={{ marginBottom: "0" }}>
      <input
        type="text"
        className="search_input"
        placeholder={placeholder}
        onChange={onChange}
        ref={filterText}
      />
      <SearchOutlined className="search_icon" />
    </form>
  );
};

export default FormFilter;
