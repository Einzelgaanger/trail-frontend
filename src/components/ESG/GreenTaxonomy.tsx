"use client";
import React, { useState } from "react";
import { Table, Tag, Input, Button, Row, Col, Select, Space, Card, Upload } from "antd";
import type { ColumnsType } from "antd/es/table";
import { SearchOutlined, UploadOutlined, DownloadOutlined, FileTextOutlined } from "@ant-design/icons";
import ButtonComponent from "../Buttons/Button";
import FormFilter from "../FormFilter";

interface TaxonomyRule {
  key: string;
  category: string;
  criteria: string;
  threshold: string;
  evidenceRequired: string;
}

interface ProjectClassification {
  key: string;
  projectId: string;
  projectName: string;
  sector: string;
  classification: "Green" | "Transition" | "Not Green";
  evidenceStatus: "Provided" | "Missing";
  evidenceFile?: string;
  lastUpdated: string;
}

// Mock Taxonomy Rules
const mockTaxonomyRules: TaxonomyRule[] = [
  {
    key: "1",
    category: "Renewable Energy",
    criteria: "Projects generating energy from renewable sources",
    threshold: "≥80% renewable energy output",
    evidenceRequired: "Energy generation reports, renewable source certificates",
  },
  {
    key: "2",
    category: "Energy Efficiency",
    criteria: "Projects reducing energy consumption",
    threshold: "≥30% energy reduction vs baseline",
    evidenceRequired: "Energy audits, baseline comparison reports",
  },
  {
    key: "3",
    category: "Clean Transportation",
    criteria: "Electric or low-emission transport systems",
    threshold: "Zero direct emissions or <50g CO₂/km",
    evidenceRequired: "Vehicle specifications, emission certificates",
  },
  {
    key: "4",
    category: "Water & Wastewater",
    criteria: "Water conservation and treatment projects",
    threshold: "≥20% water savings or treatment capacity ≥10,000 m³/day",
    evidenceRequired: "Water impact assessments, treatment certifications",
  },
  {
    key: "5",
    category: "Waste Management",
    criteria: "Recycling, composting, or waste-to-energy",
    threshold: "≥60% waste diversion from landfill",
    evidenceRequired: "Waste audit reports, diversion certificates",
  },
  {
    key: "6",
    category: "Transition Activities",
    criteria: "Activities in transition towards green",
    threshold: "Meets transition pathway criteria",
    evidenceRequired: "Transition plans, improvement commitments",
  },
];

// Mock Project Classifications
const mockClassifications: ProjectClassification[] = [
  {
    key: "1",
    projectId: "PROJ-2024-001",
    projectName: "Lagos Solar Farm Initiative",
    sector: "Renewable Energy",
    classification: "Green",
    evidenceStatus: "Provided",
    evidenceFile: "solar_farm_evidence.pdf",
    lastUpdated: "2024-01-20",
  },
  {
    key: "2",
    projectId: "PROJ-2024-002",
    projectName: "Kano Water Treatment Plant",
    sector: "Water & Sanitation",
    classification: "Green",
    evidenceStatus: "Provided",
    evidenceFile: "water_treatment_evidence.pdf",
    lastUpdated: "2024-01-18",
  },
  {
    key: "3",
    projectId: "PROJ-2024-003",
    projectName: "Port Harcourt Refinery Upgrade",
    sector: "Oil & Gas",
    classification: "Transition",
    evidenceStatus: "Provided",
    evidenceFile: "refinery_transition_plan.pdf",
    lastUpdated: "2024-01-15",
  },
  {
    key: "4",
    projectId: "PROJ-2024-005",
    projectName: "Kaduna Coal Power Plant",
    sector: "Energy",
    classification: "Not Green",
    evidenceStatus: "Missing",
    lastUpdated: "2024-01-10",
  },
  {
    key: "5",
    projectId: "PROJ-2024-006",
    projectName: "Enugu Waste Management Facility",
    sector: "Waste Management",
    classification: "Green",
    evidenceStatus: "Provided",
    evidenceFile: "waste_management_evidence.pdf",
    lastUpdated: "2024-01-25",
  },
];

export const GreenTaxonomy: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [classificationFilter, setClassificationFilter] = useState<string>("all");

  const getClassificationColor = (classification: string) => {
    switch (classification) {
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

  const classificationColumns: ColumnsType<ProjectClassification> = [
    {
      title: "Project ID",
      dataIndex: "projectId",
      key: "projectId",
      width: 180,
      fixed: "left",
    },
    {
      title: "Project Name",
      dataIndex: "projectName",
      key: "projectName",
      width: 300,
    },
    {
      title: "Sector",
      dataIndex: "sector",
      key: "sector",
      width: 200,
    },
    {
      title: "Classification",
      dataIndex: "classification",
      key: "classification",
      width: 150,
      render: (classification: string) => (
        <Tag color={getClassificationColor(classification)}>
          {classification}
        </Tag>
      ),
      filters: [
        { text: "Green", value: "Green" },
        { text: "Transition", value: "Transition" },
        { text: "Not Green", value: "Not Green" },
      ],
      onFilter: (value, record) => record.classification === value,
    },
    {
      title: "Evidence Status",
      dataIndex: "evidenceStatus",
      key: "evidenceStatus",
      width: 150,
      render: (status: string, record: ProjectClassification) => (
        <Space>
          <Tag color={status === "Provided" ? "green" : "red"}>
            {status}
          </Tag>
          {record.evidenceFile && (
            <Button
              type="link"
              size="small"
              icon={<FileTextOutlined />}
              onClick={() => console.log("Download evidence:", record.evidenceFile)}
            >
              View
            </Button>
          )}
        </Space>
      ),
      filters: [
        { text: "Provided", value: "Provided" },
        { text: "Missing", value: "Missing" },
      ],
      onFilter: (value, record) => record.evidenceStatus === value,
    },
    {
      title: "Last Updated",
      dataIndex: "lastUpdated",
      key: "lastUpdated",
      width: 150,
    },
    {
      title: "Actions",
      key: "actions",
      width: 200,
      fixed: "right",
      render: (_, record: ProjectClassification) => (
        <Space>
          <Upload
            name="file"
            accept=".pdf,.doc,.docx"
            beforeUpload={() => false}
            showUploadList={false}
          >
            <Button size="small" icon={<UploadOutlined />}>
              {record.evidenceStatus === "Missing" ? "Upload" : "Replace"}
            </Button>
          </Upload>
          <Button size="small" onClick={() => console.log("Reclassify:", record)}>
            Reclassify
          </Button>
        </Space>
      ),
    },
  ];

  const filteredClassifications = mockClassifications.filter((item) => {
    const matchesSearch = 
      item.projectId.toLowerCase().includes(searchText.toLowerCase()) ||
      item.projectName.toLowerCase().includes(searchText.toLowerCase()) ||
      item.sector.toLowerCase().includes(searchText.toLowerCase());
    const matchesClassification = 
      classificationFilter === "all" || item.classification === classificationFilter;
    return matchesSearch && matchesClassification;
  });

  return (
    <div className="col-12">
      <div style={{ marginBottom: "24px" }}>
        <h1 className="view-title">Green Taxonomy Classification</h1>
        <p style={{ color: "#666", marginTop: "8px" }}>
          DBN Green Taxonomy rules and project classification status
        </p>
      </div>

      <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Card title="Taxonomy Rules" size="small">
            <Table
              dataSource={mockTaxonomyRules}
              columns={[
                {
                  title: "Category",
                  dataIndex: "category",
                  key: "category",
                  width: 200,
                },
                {
                  title: "Criteria/Threshold",
                  key: "criteria",
                  render: (_, record) => (
                    <div>
                      <div style={{ marginBottom: "4px" }}>{record.criteria}</div>
                      <Tag color="blue">{record.threshold}</Tag>
                    </div>
                  ),
                },
                {
                  title: "Evidence Required",
                  dataIndex: "evidenceRequired",
                  key: "evidenceRequired",
                  width: 250,
                },
              ]}
              pagination={false}
              size="small"
            />
          </Card>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Card title="Classification Summary" size="small">
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span>Green Projects:</span>
                  <Tag color="green">65% (27 projects)</Tag>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span>Transition Projects:</span>
                  <Tag color="orange">25% (11 projects)</Tag>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span>Not Green Projects:</span>
                  <Tag color="red">10% (4 projects)</Tag>
                </div>
              </div>
              <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #f0f0f0" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span>Evidence Provided:</span>
                  <Tag color="green">38 projects</Tag>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Evidence Missing:</span>
                  <Tag color="red">4 projects</Tag>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <FormFilter
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search by Project ID, Name, or Sector"
            filterText={searchText}
          />
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 6 }}>
          <Select
            placeholder="Filter by Classification"
            style={{ width: "100%" }}
            size="large"
            value={classificationFilter}
            onChange={setClassificationFilter}
          >
            <Select.Option value="all">All Classifications</Select.Option>
            <Select.Option value="Green">Green</Select.Option>
            <Select.Option value="Transition">Transition</Select.Option>
            <Select.Option value="Not Green">Not Green</Select.Option>
          </Select>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 6 }}>
          <ButtonComponent
            htmlType="button"
            className="btn-outline"
            style={{ width: "100%" }}
          >
            <DownloadOutlined style={{ marginRight: "8px" }} /> Export Report
          </ButtonComponent>
        </Col>
      </Row>

      <Table
        columns={classificationColumns}
        dataSource={filteredClassifications}
        scroll={{ x: 1400 }}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (total) => `Total ${total} projects`,
        }}
      />
    </div>
  );
};
