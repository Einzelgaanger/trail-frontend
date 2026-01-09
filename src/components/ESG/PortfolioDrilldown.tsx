"use client";
import React, { useState } from "react";
import { Table, Tag, Input, Button, Row, Col, Select, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import { SearchOutlined, DownloadOutlined } from "@ant-design/icons";
import ButtonComponent from "../Buttons/Button";

interface ProjectData {
  key: string;
  projectId: string;
  pfiName: string;
  sector: string;
  location: string;
  amount: number;
  startDate: string;
  endDate: string;
  taxonomyStatus: "Green" | "Transition" | "Not Green";
  esgStatus: "Complete" | "Incomplete";
  esgRAG: "red" | "amber" | "green";
  carbonScope1: "Y" | "N";
  carbonScope2: "Y" | "N";
  carbonScope3: "Y" | "N";
  dataQualityScore: number;
}

// Mock Project Data
const mockProjects: ProjectData[] = [
  {
    key: "1",
    projectId: "PROJ-2024-001",
    pfiName: "Lagos Solar Farm Initiative",
    sector: "Renewable Energy",
    location: "Lagos State",
    amount: 2500000000,
    startDate: "2024-01-15",
    endDate: "2026-12-31",
    taxonomyStatus: "Green",
    esgStatus: "Complete",
    esgRAG: "green",
    carbonScope1: "Y",
    carbonScope2: "Y",
    carbonScope3: "Y",
    dataQualityScore: 95,
  },
  {
    key: "2",
    projectId: "PROJ-2024-002",
    pfiName: "Kano Water Treatment Plant",
    sector: "Water & Sanitation",
    location: "Kano State",
    amount: 1800000000,
    startDate: "2024-03-01",
    endDate: "2025-11-30",
    taxonomyStatus: "Green",
    esgStatus: "Complete",
    esgRAG: "green",
    carbonScope1: "Y",
    carbonScope2: "Y",
    carbonScope3: "N",
    dataQualityScore: 88,
  },
  {
    key: "3",
    projectId: "PROJ-2024-003",
    pfiName: "Port Harcourt Refinery Upgrade",
    sector: "Oil & Gas",
    location: "Rivers State",
    amount: 4500000000,
    startDate: "2024-02-10",
    endDate: "2027-06-30",
    taxonomyStatus: "Transition",
    esgStatus: "Incomplete",
    esgRAG: "amber",
    carbonScope1: "Y",
    carbonScope2: "Y",
    carbonScope3: "Y",
    dataQualityScore: 72,
  },
  {
    key: "4",
    projectId: "PROJ-2024-004",
    pfiName: "Abuja Metro Rail Extension",
    sector: "Transportation",
    location: "FCT, Abuja",
    amount: 3200000000,
    startDate: "2024-04-05",
    endDate: "2026-08-15",
    taxonomyStatus: "Green",
    esgStatus: "Complete",
    esgRAG: "green",
    carbonScope1: "Y",
    carbonScope2: "Y",
    carbonScope3: "Y",
    dataQualityScore: 92,
  },
  {
    key: "5",
    projectId: "PROJ-2024-005",
    pfiName: "Kaduna Coal Power Plant",
    sector: "Energy",
    location: "Kaduna State",
    amount: 3800000000,
    startDate: "2023-11-20",
    endDate: "2026-03-31",
    taxonomyStatus: "Not Green",
    esgStatus: "Incomplete",
    esgRAG: "red",
    carbonScope1: "Y",
    carbonScope2: "N",
    carbonScope3: "N",
    dataQualityScore: 45,
  },
  {
    key: "6",
    projectId: "PROJ-2024-006",
    pfiName: "Enugu Waste Management Facility",
    sector: "Waste Management",
    location: "Enugu State",
    amount: 950000000,
    startDate: "2024-05-10",
    endDate: "2025-12-31",
    taxonomyStatus: "Green",
    esgStatus: "Complete",
    esgRAG: "green",
    carbonScope1: "Y",
    carbonScope2: "Y",
    carbonScope3: "Y",
    dataQualityScore: 89,
  },
];

export const PortfolioDrilldown: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(mockProjects);
  const [taxonomyFilter, setTaxonomyFilter] = useState<string>("all");
  const [esgStatusFilter, setEsgStatusFilter] = useState<string>("all");

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
    let filtered = mockProjects;

    if (value) {
      filtered = filtered.filter(
        (item) =>
          item.projectId.toLowerCase().includes(value.toLowerCase()) ||
          item.pfiName.toLowerCase().includes(value.toLowerCase()) ||
          item.sector.toLowerCase().includes(value.toLowerCase()) ||
          item.location.toLowerCase().includes(value.toLowerCase())
      );
    }

    if (taxonomyFilter !== "all") {
      filtered = filtered.filter((item) => item.taxonomyStatus === taxonomyFilter);
    }

    if (esgStatusFilter !== "all") {
      filtered = filtered.filter((item) => item.esgStatus === esgStatusFilter);
    }

    setFilteredData(filtered);
  };

  const handleTaxonomyFilter = (value: string) => {
    setTaxonomyFilter(value);
    handleSearch(searchText);
  };

  const handleESGStatusFilter = (value: string) => {
    setEsgStatusFilter(value);
    handleSearch(searchText);
  };

  const getRAGColor = (rag: string) => {
    switch (rag) {
      case "green":
        return "green";
      case "amber":
        return "orange";
      case "red":
        return "red";
      default:
        return "default";
    }
  };

  const getTaxonomyColor = (status: string) => {
    switch (status) {
      case "Green":
        return "green";
      case "Transition":
        return "orange";
      case "Not Green":
        return "red";
      default:
        return "default";
    }
  };

  const columns: ColumnsType<ProjectData> = [
    {
      title: "Project ID",
      dataIndex: "projectId",
      key: "projectId",
      width: 150,
      fixed: "left",
    },
    {
      title: "PFI Name",
      dataIndex: "pfiName",
      key: "pfiName",
      width: 250,
    },
    {
      title: "Sector",
      dataIndex: "sector",
      key: "sector",
      width: 180,
    },
    {
      title: "Location (State)",
      dataIndex: "location",
      key: "location",
      width: 150,
    },
    {
      title: "Amount (₦)",
      dataIndex: "amount",
      key: "amount",
      width: 180,
      render: (amount: number) => formatCurrency(amount),
      sorter: (a, b) => a.amount - b.amount,
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      width: 120,
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
      width: 120,
    },
    {
      title: "Taxonomy Status",
      dataIndex: "taxonomyStatus",
      key: "taxonomyStatus",
      width: 150,
      render: (status: string) => (
        <Tag color={getTaxonomyColor(status)}>{status}</Tag>
      ),
      filters: [
        { text: "Green", value: "Green" },
        { text: "Transition", value: "Transition" },
        { text: "Not Green", value: "Not Green" },
      ],
      onFilter: (value, record) => record.taxonomyStatus === value,
    },
    {
      title: "ESG Status",
      dataIndex: "esgStatus",
      key: "esgStatus",
      width: 130,
      render: (status: string, record: ProjectData) => (
        <Space>
          <Tag color={status === "Complete" ? "green" : "orange"}>
            {status}
          </Tag>
          <Tag color={getRAGColor(record.esgRAG)}>{record.esgRAG.toUpperCase()}</Tag>
        </Space>
      ),
      filters: [
        { text: "Complete", value: "Complete" },
        { text: "Incomplete", value: "Incomplete" },
      ],
      onFilter: (value, record) => record.esgStatus === value,
    },
    {
      title: "Carbon Status",
      key: "carbonStatus",
      width: 200,
      render: (_, record: ProjectData) => (
        <Space>
          <Tag color={record.carbonScope1 === "Y" ? "green" : "red"}>
            Scope 1
          </Tag>
          <Tag color={record.carbonScope2 === "Y" ? "green" : "red"}>
            Scope 2
          </Tag>
          <Tag color={record.carbonScope3 === "Y" ? "green" : "red"}>
            Scope 3
          </Tag>
        </Space>
      ),
    },
    {
      title: "Data Quality Score",
      dataIndex: "dataQualityScore",
      key: "dataQualityScore",
      width: 150,
      render: (score: number) => (
        <Tag color={score >= 80 ? "green" : score >= 60 ? "orange" : "red"}>
          {score}%
        </Tag>
      ),
      sorter: (a, b) => a.dataQualityScore - b.dataQualityScore,
    },
  ];

  return (
    <div className="col-12">
      <div style={{ marginBottom: "24px" }}>
        <h1 className="view-title">Portfolio Drilldown - Projects/Facilities Register</h1>
        <p style={{ color: "#666", marginTop: "8px" }}>
          Detailed view of all projects and facilities with ESG classifications and status
        </p>
      </div>

      <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <Input
            placeholder="Search by Project ID, PFI Name, Sector, or Location"
            prefix={<SearchOutlined />}
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
            size="large"
          />
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 6 }}>
          <Select
            placeholder="Filter by Taxonomy Status"
            style={{ width: "100%" }}
            size="large"
            value={taxonomyFilter}
            onChange={handleTaxonomyFilter}
          >
            <Select.Option value="all">All Taxonomy Status</Select.Option>
            <Select.Option value="Green">Green</Select.Option>
            <Select.Option value="Transition">Transition</Select.Option>
            <Select.Option value="Not Green">Not Green</Select.Option>
          </Select>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 6 }}>
          <Select
            placeholder="Filter by ESG Status"
            style={{ width: "100%" }}
            size="large"
            value={esgStatusFilter}
            onChange={handleESGStatusFilter}
          >
            <Select.Option value="all">All ESG Status</Select.Option>
            <Select.Option value="Complete">Complete</Select.Option>
            <Select.Option value="Incomplete">Incomplete</Select.Option>
          </Select>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 4 }}>
          <ButtonComponent
            htmlType="button"
            className="updateButton"
            style={{ width: "100%" }}
          >
            <DownloadOutlined style={{ marginRight: "8px" }} /> Export
          </ButtonComponent>
        </Col>
      </Row>

      <Table
        columns={columns}
        dataSource={filteredData}
        scroll={{ x: 1500 }}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (total) => `Total ${total} projects`,
        }}
      />
    </div>
  );
};
