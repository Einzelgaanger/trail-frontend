"use client";
import React, { useState } from "react";
import { Divider, Radio, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface TableProps {
  data: any;
  columns: any;
}

const CustomTable: React.FC<TableProps> = ({ data, columns }) => {
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <div>
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default CustomTable;
