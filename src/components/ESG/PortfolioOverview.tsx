"use client";
import React from "react";
import { Row, Col, Progress, Tag, Tooltip } from "antd";
import { DollarOutlined, CheckCircleOutlined, ClockCircleOutlined, EnvironmentOutlined, FireOutlined, WarningOutlined } from "@ant-design/icons";

// Mock ESG Data
const mockESGData = {
  portfolioValue: 12500000000, // ₦12.5B
  projectCount: 42,
  esgCompleteness: 87,
  reportingTimeliness: {
    onTime: 38,
    late: 4,
    total: 42
  },
  greenTaxonomy: {
    green: 65,
    transition: 25,
    notGreen: 10
  },
  carbonSummary: {
    scope1: 12450, // tCO₂e
    scope2: 8750,
    scope3: 32100,
    total: 53300
  },
  esgFlags: {
    red: 3,
    amber: 7,
    green: 32
  }
};

export const PortfolioOverview: React.FC = () => {
  const { portfolioValue, projectCount, esgCompleteness, reportingTimeliness, greenTaxonomy, carbonSummary, esgFlags } = mockESGData;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-NG').format(value);
  };

  const timelinessRate = ((reportingTimeliness.onTime / reportingTimeliness.total) * 100).toFixed(1);
  const onTimePercentage = Math.round((reportingTimeliness.onTime / reportingTimeliness.total) * 100);

  return (
    <div className="col-12">
      <h1 className="view-title" style={{ marginBottom: '24px' }}>Portfolio Overview - Executive Snapshot</h1>
      <Row gutter={[16, 16]} className="esg-overview-stats">
        {/* KPI 1: Portfolio Value + #Projects */}
        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <div className="dashboard-tab esg-kpi-card">
            <div className="flex-tab">
              <div className="stat-title">
                <span>Portfolio Value</span>
              </div>
              <div className="stat-icon" style={{ color: '#1354D3' }}>
                <DollarOutlined style={{ fontSize: '24px' }} />
              </div>
            </div>
            <div>
              <h1 style={{ fontSize: '28px', margin: '12px 0 4px 0', fontWeight: 600 }}>
                {formatCurrency(portfolioValue)}
              </h1>
              <div style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>
                <span style={{ fontWeight: 500 }}>{projectCount}</span> Projects/Facilities
              </div>
            </div>
          </div>
        </Col>

        {/* KPI 2: ESG Data Completeness */}
        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <div className="dashboard-tab esg-kpi-card">
            <div className="flex-tab">
              <div className="stat-title">
                <span>ESG Data Completeness</span>
              </div>
              <div className="stat-icon" style={{ color: '#27BE63' }}>
                <CheckCircleOutlined style={{ fontSize: '24px' }} />
              </div>
            </div>
            <div>
              <h1 style={{ fontSize: '28px', margin: '12px 0 8px 0', fontWeight: 600 }}>
                {esgCompleteness}%
              </h1>
              <Progress 
                percent={esgCompleteness} 
                strokeColor={{
                  '0%': '#27BE63',
                  '100%': '#27BE63',
                }}
                showInfo={false}
                style={{ marginTop: '8px' }}
              />
              <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                % of required ESG fields submitted and validated
              </div>
            </div>
          </div>
        </Col>

        {/* KPI 3: PFI Reporting Timeliness */}
        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <div className="dashboard-tab esg-kpi-card">
            <div className="flex-tab">
              <div className="stat-title">
                <span>PFI Reporting Timeliness</span>
              </div>
              <div className="stat-icon" style={{ color: '#D66F0F' }}>
                <ClockCircleOutlined style={{ fontSize: '24px' }} />
              </div>
            </div>
            <div>
              <h1 style={{ fontSize: '28px', margin: '12px 0 4px 0', fontWeight: 600 }}>
                {timelinessRate}%
              </h1>
              <div style={{ marginTop: '8px', display: 'flex', gap: '12px', fontSize: '14px' }}>
                <Tag color="green">{reportingTimeliness.onTime} On-time</Tag>
                <Tag color="red">{reportingTimeliness.late} Late</Tag>
              </div>
              <div style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
                PFIs complied with reporting deadlines
              </div>
            </div>
          </div>
        </Col>

        {/* KPI 4: Green Taxonomy Classified */}
        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <div className="dashboard-tab esg-kpi-card">
            <div className="flex-tab">
              <div className="stat-title">
                <span>Green Taxonomy Classified</span>
              </div>
              <div className="stat-icon" style={{ color: '#27BE63' }}>
                <EnvironmentOutlined style={{ fontSize: '24px' }} />
              </div>
            </div>
            <div>
              <h1 style={{ fontSize: '28px', margin: '12px 0 8px 0', fontWeight: 600 }}>
                {greenTaxonomy.green}%
              </h1>
              <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Green:</span>
                  <Tag color="green">{greenTaxonomy.green}%</Tag>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Transition:</span>
                  <Tag color="orange">{greenTaxonomy.transition}%</Tag>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Not Green:</span>
                  <Tag color="red">{greenTaxonomy.notGreen}%</Tag>
                </div>
              </div>
              <div style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
                % by portfolio value
              </div>
            </div>
          </div>
        </Col>

        {/* KPI 5: Carbon Summary */}
        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <div className="dashboard-tab esg-kpi-card">
            <div className="flex-tab">
              <div className="stat-title">
                <span>Carbon Summary</span>
              </div>
              <div className="stat-icon" style={{ color: '#FF6B6B' }}>
                <FireOutlined style={{ fontSize: '24px' }} />
              </div>
            </div>
            <div>
              <h1 style={{ fontSize: '28px', margin: '12px 0 4px 0', fontWeight: 600 }}>
                {formatNumber(carbonSummary.total)}
              </h1>
              <div style={{ fontSize: '12px', color: '#666', marginTop: '4px', marginBottom: '8px' }}>
                tCO₂e Total
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '13px', marginTop: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Scope 1:</span>
                  <span style={{ fontWeight: 500 }}>{formatNumber(carbonSummary.scope1)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Scope 2:</span>
                  <span style={{ fontWeight: 500 }}>{formatNumber(carbonSummary.scope2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Scope 3:</span>
                  <span style={{ fontWeight: 500 }}>{formatNumber(carbonSummary.scope3)}</span>
                </div>
              </div>
            </div>
          </div>
        </Col>

        {/* KPI 6: Top ESG Flags (RAG) */}
        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <div className="dashboard-tab esg-kpi-card">
            <div className="flex-tab">
              <div className="stat-title">
                <span>ESG Flags Status</span>
              </div>
              <div className="stat-icon" style={{ color: '#4431B4' }}>
                <WarningOutlined style={{ fontSize: '24px' }} />
              </div>
            </div>
            <div>
              <h1 style={{ fontSize: '28px', margin: '12px 0 8px 0', fontWeight: 600 }}>
                {esgFlags.red + esgFlags.amber + esgFlags.green}
              </h1>
              <div style={{ marginTop: '8px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <Tooltip title="Projects with critical ESG issues requiring immediate attention">
                  <Tag color="red" style={{ fontSize: '13px', padding: '4px 12px' }}>
                    {esgFlags.red} Red
                  </Tag>
                </Tooltip>
                <Tooltip title="Projects with moderate ESG risks needing monitoring">
                  <Tag color="orange" style={{ fontSize: '13px', padding: '4px 12px' }}>
                    {esgFlags.amber} Amber
                  </Tag>
                </Tooltip>
                <Tooltip title="Projects meeting ESG standards">
                  <Tag color="green" style={{ fontSize: '13px', padding: '4px 12px' }}>
                    {esgFlags.green} Green
                  </Tag>
                </Tooltip>
              </div>
              <div style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
                Based on missing data, failed validations, missing evidence, and high-risk sectors
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
