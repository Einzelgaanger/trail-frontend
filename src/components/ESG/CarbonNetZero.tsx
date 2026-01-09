"use client";
import React, { useState } from "react";
import { Table, Tag, Input, Button, Row, Col, Card, Progress, Space, Statistic } from "antd";
import type { ColumnsType } from "antd/es/table";
import { SearchOutlined, DownloadOutlined, FireOutlined, EnvironmentOutlined } from "@ant-design/icons";
import ButtonComponent from "../Buttons/Button";
import FormFilter from "../FormFilter";

interface CarbonData {
  key: string;
  projectId: string;
  projectName: string;
  sector: string;
  scope1: number; // tCO₂e
  scope2: number; // tCO₂e
  scope3: number; // tCO₂e
  total: number; // tCO₂e
  baselineYear: number;
  baselineEmissions: number; // tCO₂e
  targetYear: number;
  targetReduction: number; // percentage
  currentProgress: number; // percentage
  status: "On Track" | "At Risk" | "Off Track";
}

// Mock Carbon Data
const mockCarbonData: CarbonData[] = [
  {
    key: "1",
    projectId: "PROJ-2024-001",
    projectName: "Lagos Solar Farm Initiative",
    sector: "Renewable Energy",
    scope1: 150,
    scope2: 450,
    scope3: 2300,
    total: 2900,
    baselineYear: 2023,
    baselineEmissions: 5000,
    targetYear: 2026,
    targetReduction: 45,
    currentProgress: 42,
    status: "On Track",
  },
  {
    key: "2",
    projectId: "PROJ-2024-002",
    projectName: "Kano Water Treatment Plant",
    sector: "Water & Sanitation",
    scope1: 280,
    scope2: 1200,
    scope3: 4200,
    total: 5680,
    baselineYear: 2023,
    baselineEmissions: 7000,
    targetYear: 2025,
    targetReduction: 30,
    currentProgress: 19,
    status: "On Track",
  },
  {
    key: "3",
    projectId: "PROJ-2024-003",
    projectName: "Port Harcourt Refinery Upgrade",
    sector: "Oil & Gas",
    scope1: 4500,
    scope2: 2800,
    scope3: 15000,
    total: 22300,
    baselineYear: 2023,
    baselineEmissions: 28000,
    targetYear: 2027,
    targetReduction: 25,
    currentProgress: 20,
    status: "At Risk",
  },
  {
    key: "4",
    projectId: "PROJ-2024-004",
    projectName: "Abuja Metro Rail Extension",
    sector: "Transportation",
    scope1: 120,
    scope2: 800,
    scope3: 5200,
    total: 6120,
    baselineYear: 2023,
    baselineEmissions: 8000,
    targetYear: 2026,
    targetReduction: 35,
    currentProgress: 24,
    status: "On Track",
  },
  {
    key: "5",
    projectId: "PROJ-2024-005",
    projectName: "Kaduna Coal Power Plant",
    sector: "Energy",
    scope1: 8500,
    scope2: 3200,
    scope3: 12000,
    total: 23700,
    baselineYear: 2023,
    baselineEmissions: 26000,
    targetYear: 2026,
    targetReduction: 15,
    currentProgress: 9,
    status: "Off Track",
  },
];

export const CarbonNetZero: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("en-NG", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const portfolioTotal = mockCarbonData.reduce((sum, item) => sum + item.total, 0);
  const portfolioScope1 = mockCarbonData.reduce((sum, item) => sum + item.scope1, 0);
  const portfolioScope2 = mockCarbonData.reduce((sum, item) => sum + item.scope2, 0);
  const portfolioScope3 = mockCarbonData.reduce((sum, item) => sum + item.scope3, 0);
  const portfolioBaseline = mockCarbonData.reduce((sum, item) => sum + item.baselineEmissions, 0);
  const portfolioTarget = portfolioBaseline * 0.7; // Assuming 30% average reduction
  const portfolioProgress = ((portfolioBaseline - portfolioTotal) / (portfolioBaseline - portfolioTarget)) * 100;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "On Track":
        return "green";
      case "At Risk":
        return "orange";
      case "Off Track":
        return "red";
      default:
        return "default";
    }
  };

  const carbonColumns: ColumnsType<CarbonData> = [
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
      title: "Scope 1 (tCO₂e)",
      dataIndex: "scope1",
      key: "scope1",
      width: 150,
      render: (value: number) => formatNumber(value),
      sorter: (a, b) => a.scope1 - b.scope1,
    },
    {
      title: "Scope 2 (tCO₂e)",
      dataIndex: "scope2",
      key: "scope2",
      width: 150,
      render: (value: number) => formatNumber(value),
      sorter: (a, b) => a.scope2 - b.scope2,
    },
    {
      title: "Scope 3 (tCO₂e)",
      dataIndex: "scope3",
      key: "scope3",
      width: 150,
      render: (value: number) => formatNumber(value),
      sorter: (a, b) => a.scope3 - b.scope3,
    },
    {
      title: "Total (tCO₂e)",
      dataIndex: "total",
      key: "total",
      width: 150,
      render: (value: number) => <strong>{formatNumber(value)}</strong>,
      sorter: (a, b) => a.total - b.total,
    },
    {
      title: "Baseline vs Current",
      key: "baseline",
      width: 250,
      render: (_, record: CarbonData) => (
        <div>
          <div style={{ marginBottom: "4px", fontSize: "12px" }}>
            Baseline ({record.baselineYear}): {formatNumber(record.baselineEmissions)} tCO₂e
          </div>
          <div style={{ marginBottom: "4px", fontSize: "12px" }}>
            Current: {formatNumber(record.total)} tCO₂e
          </div>
          <Progress
            percent={Math.round(((record.baselineEmissions - record.total) / record.baselineEmissions) * 100)}
            size="small"
            status={record.total < record.baselineEmissions * 0.85 ? "success" : "exception"}
          />
        </div>
      ),
    },
    {
      title: "Target & Progress",
      key: "target",
      width: 200,
      render: (_, record: CarbonData) => (
        <div>
          <div style={{ marginBottom: "4px", fontSize: "12px" }}>
            Target ({record.targetYear}): {record.targetReduction}% reduction
          </div>
          <Progress
            percent={record.currentProgress}
            size="small"
            strokeColor={getStatusColor(record.status)}
          />
          <div style={{ marginTop: "4px" }}>
            <Tag color={getStatusColor(record.status)}>{record.status}</Tag>
          </div>
        </div>
      ),
    },
  ];

  const filteredData = mockCarbonData.filter(
    (item) =>
      item.projectId.toLowerCase().includes(searchText.toLowerCase()) ||
      item.projectName.toLowerCase().includes(searchText.toLowerCase()) ||
      item.sector.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="col-12">
      <div style={{ marginBottom: "24px" }}>
        <h1 className="view-title">Carbon & Net Zero Tracking</h1>
        <p style={{ color: "#666", marginTop: "8px" }}>
          Portfolio and project-level carbon accounting and Net Zero target tracking
        </p>
      </div>

      {/* Portfolio Summary Cards */}
      <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
        <Col xs={{ span: 24 }} lg={{ span: 6 }}>
          <Card>
            <Statistic
              title="Portfolio Total Emissions"
              value={formatNumber(portfolioTotal)}
              suffix="tCO₂e"
              prefix={<FireOutlined />}
              valueStyle={{ color: "#FF6B6B" }}
            />
          </Card>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 6 }}>
          <Card>
            <Statistic
              title="Scope 1 Total"
              value={formatNumber(portfolioScope1)}
              suffix="tCO₂e"
              valueStyle={{ color: "#FF8787" }}
            />
          </Card>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 6 }}>
          <Card>
            <Statistic
              title="Scope 2 Total"
              value={formatNumber(portfolioScope2)}
              suffix="tCO₂e"
              valueStyle={{ color: "#FFA8A8" }}
            />
          </Card>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 6 }}>
          <Card>
            <Statistic
              title="Scope 3 Total"
              value={formatNumber(portfolioScope3)}
              suffix="tCO₂e"
              valueStyle={{ color: "#FFC9C9" }}
            />
          </Card>
        </Col>
      </Row>

      {/* Net Zero Progress */}
      <Card style={{ marginBottom: "24px" }} title="Portfolio Net Zero Progress">
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <div style={{ marginBottom: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span>Baseline Emissions (2023):</span>
                <strong>{formatNumber(portfolioBaseline)} tCO₂e</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span>Target Emissions (2030):</span>
                <strong>{formatNumber(portfolioTarget)} tCO₂e</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                <span>Current Emissions:</span>
                <strong>{formatNumber(portfolioTotal)} tCO₂e</strong>
              </div>
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <div>
              <div style={{ marginBottom: "8px" }}>
                <strong>Progress to Target:</strong>
              </div>
              <Progress
                percent={Math.round(Math.max(0, Math.min(100, portfolioProgress)))}
                strokeColor={{
                  "0%": "#FF6B6B",
                  "100%": "#27BE63",
                }}
                status={portfolioProgress > 50 ? "active" : "normal"}
              />
              <div style={{ marginTop: "8px", fontSize: "12px", color: "#666" }}>
                {((portfolioBaseline - portfolioTotal) / portfolioBaseline * 100).toFixed(1)}% reduction from baseline
              </div>
            </div>
          </Col>
        </Row>
      </Card>

      {/* Calculation Logic Info */}
      <Card style={{ marginBottom: "24px" }} title="Emission Calculation Logic" size="small">
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <div>
              <strong>Scope 1:</strong> Direct emissions from owned or controlled sources
              <div style={{ marginTop: "4px", fontSize: "12px", color: "#666" }}>
                Formula: Activity Data × Emission Factor = tCO₂e
              </div>
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <div>
              <strong>Scope 2:</strong> Indirect emissions from purchased energy
              <div style={{ marginTop: "4px", fontSize: "12px", color: "#666" }}>
                Formula: Energy Consumption × Grid Emission Factor = tCO₂e
              </div>
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <div>
              <strong>Scope 3:</strong> Indirect emissions from value chain
              <div style={{ marginTop: "4px", fontSize: "12px", color: "#666" }}>
                Formula: Activity Data × Value Chain Emission Factor = tCO₂e
              </div>
            </div>
          </Col>
        </Row>
      </Card>

      <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
        <Col xs={{ span: 24 }} lg={{ span: 18 }}>
          <FormFilter
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search by Project ID, Name, or Sector"
            filterText={searchText}
          />
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 6 }}>
          <ButtonComponent
            htmlType="button"
            className="btn-outline"
            style={{ width: "100%" }}
          >
            <DownloadOutlined style={{ marginRight: "8px" }} /> Export Carbon Report
          </ButtonComponent>
        </Col>
      </Row>

      <Table
        columns={carbonColumns}
        dataSource={filteredData}
        scroll={{ x: 1600 }}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (total) => `Total ${total} projects`,
        }}
      />
    </div>
  );
};
