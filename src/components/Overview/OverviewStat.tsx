import React from "react";
import { Row, Col } from "antd";
import { DollarOutlined, CheckCircleOutlined, ClockCircleOutlined, EnvironmentOutlined, FireOutlined, WarningOutlined } from "@ant-design/icons";

export const OverviewStat: React.FC = () => {
  const mockESGData = {
    portfolioValue: 12500000000,
    projectCount: 42,
    esgCompleteness: 87,
    reportingTimeliness: { onTime: 38, late: 4, total: 42 },
    greenTaxonomy: { green: 65 },
    carbonSummary: { total: 53300 },
    esgFlags: { red: 3, amber: 7, green: 32 }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency', currency: 'NGN', minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Row gutter={[16, 16]} className="overview-stat controlBoard">
      <Col xs={24} lg={8}>
        <div className="dashboard-tab">
          <div className="flex-tab">
            <span className="stat-title">Portfolio Value</span>
            <DollarOutlined style={{ color: '#1354D3', fontSize: '20px' }} />
          </div>
          <h1>{formatCurrency(mockESGData.portfolioValue)}</h1>
          <p>{mockESGData.projectCount} Projects/Facilities</p>
        </div>
      </Col>
      <Col xs={24} lg={8}>
        <div className="dashboard-tab">
          <div className="flex-tab">
            <span className="stat-title">ESG Completeness</span>
            <CheckCircleOutlined style={{ color: '#27BE63', fontSize: '20px' }} />
          </div>
          <h1>{mockESGData.esgCompleteness}%</h1>
          <p>Fields validated</p>
        </div>
      </Col>
      <Col xs={24} lg={8}>
        <div className="dashboard-tab">
          <div className="flex-tab">
            <span className="stat-title">Reporting Timeliness</span>
            <ClockCircleOutlined style={{ color: '#D66F0F', fontSize: '20px' }} />
          </div>
          <h1>{((mockESGData.reportingTimeliness.onTime / mockESGData.reportingTimeliness.total) * 100).toFixed(0)}%</h1>
          <p>{mockESGData.reportingTimeliness.onTime} On-time / {mockESGData.reportingTimeliness.late} Late</p>
        </div>
      </Col>
    </Row>
  );
};
