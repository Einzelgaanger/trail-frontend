"use client";
import React, { useState } from "react";
import { Card, Row, Col, Button, Space, Modal, message } from "antd";
import { 
  DownloadOutlined, 
  FilePdfOutlined, 
  FileExcelOutlined,
  FileWordOutlined,
  PrinterOutlined
} from "@ant-design/icons";
import ButtonComponent from "../Buttons/Button";

export const ReportsExport: React.FC = () => {
  const [loading, setLoading] = useState<string | null>(null);

  const handleExport = (reportType: string, format: string) => {
    setLoading(`${reportType}-${format}`);
    
    // Simulate export generation
    setTimeout(() => {
      message.success(`${reportType} exported successfully as ${format.toUpperCase()}`);
      setLoading(null);
      
      // Simulate download (in real app, this would trigger actual file download)
      Modal.info({
        title: "Export Ready",
        content: `${reportType} has been generated and will be downloaded as ${format.toUpperCase()} format.`,
      });
    }, 2000);
  };

  const reportButtons = [
    {
      title: "DBN ESG Portfolio Pack",
      description: "Comprehensive ESG portfolio report including all projects, taxonomy classifications, and compliance status",
      formats: ["PDF", "Excel"],
      icon: <FilePdfOutlined />,
      color: "#1354D3",
    },
    {
      title: "PFI Compliance Summary",
      description: "Summary of all PFI submissions, validation status, and compliance metrics",
      formats: ["Excel", "PDF"],
      icon: <FileExcelOutlined />,
      color: "#27BE63",
    },
    {
      title: "Carbon & Net Zero Summary",
      description: "Portfolio and project-level carbon emissions, targets, and Net Zero progress tracking",
      formats: ["PDF", "Excel"],
      icon: <FilePdfOutlined />,
      color: "#FF6B6B",
    },
    {
      title: "Green Taxonomy Report",
      description: "Complete taxonomy classifications with evidence status for all projects",
      formats: ["PDF", "Word"],
      icon: <FileWordOutlined />,
      color: "#D66F0F",
    },
    {
      title: "ESG Data Quality Report",
      description: "Data completeness scores, error logs, and validation metrics across all PFIs",
      formats: ["Excel", "PDF"],
      icon: <FileExcelOutlined />,
      color: "#4431B4",
    },
    {
      title: "Executive Dashboard Summary",
      description: "High-level executive summary with key ESG KPIs and portfolio performance",
      formats: ["PDF", "PowerPoint"],
      icon: <FilePdfOutlined />,
      color: "#1354D3",
    },
  ];

  const getIconForFormat = (format: string) => {
    switch (format.toLowerCase()) {
      case "pdf":
        return <FilePdfOutlined />;
      case "excel":
        return <FileExcelOutlined />;
      case "word":
        return <FileWordOutlined />;
      case "powerpoint":
        return <PrinterOutlined />;
      default:
        return <DownloadOutlined />;
    }
  };

  return (
    <div className="col-12">
      <div style={{ marginBottom: "24px" }}>
        <h1 className="view-title">Reports & Export</h1>
        <p style={{ color: "#666", marginTop: "8px" }}>
          Generate and export comprehensive ESG reports in various formats
        </p>
      </div>

      <Row gutter={[16, 16]}>
        {reportButtons.map((report, index) => (
          <Col xs={{ span: 24 }} lg={{ span: 12 }} key={index}>
            <Card
              hoverable
              style={{
                height: "100%",
                borderLeft: `4px solid ${report.color}`,
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "16px" }}>
                <div
                  style={{
                    fontSize: "32px",
                    color: report.color,
                    marginRight: "16px",
                    marginTop: "4px",
                  }}
                >
                  {report.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: "0 0 8px 0", fontSize: "18px", fontWeight: 600 }}>
                    {report.title}
                  </h3>
                  <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>
                    {report.description}
                  </p>
                </div>
              </div>
              
              <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #f0f0f0" }}>
                <Space wrap>
                  {report.formats.map((format) => {
                    const isLoading = loading === `${report.title}-${format}`;
                    return (
                      <ButtonComponent
                        key={format}
                        htmlType="button"
                        className="updateButton"
                        onClick={() => handleExport(report.title, format)}
                        style={{ minWidth: "120px", opacity: isLoading ? 0.6 : 1 }}
                        disabled={isLoading}
                      >
                        {getIconForFormat(format)} {isLoading ? "Exporting..." : `Export ${format}`}
                      </ButtonComponent>
                    );
                  })}
                </Space>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Quick Export Actions */}
      <Card
        title="Quick Export Actions"
        style={{ marginTop: "24px" }}
      >
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <ButtonComponent
              htmlType="button"
              className="updateButton"
              style={{ width: "100%" }}
              onClick={() => handleExport("Complete Portfolio Report", "PDF")}
            >
              <FilePdfOutlined style={{ marginRight: "8px" }} /> Export Complete Portfolio (PDF)
            </ButtonComponent>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <ButtonComponent
              htmlType="button"
              className="btn-outline"
              style={{ width: "100%" }}
              onClick={() => handleExport("All Project Data", "Excel")}
            >
              <FileExcelOutlined style={{ marginRight: "8px" }} /> Export All Project Data (Excel)
            </ButtonComponent>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <ButtonComponent
              htmlType="button"
              className="btn-outline"
              style={{ width: "100%" }}
              onClick={() => handleExport("Complete Dataset", "CSV")}
            >
              <DownloadOutlined style={{ marginRight: "8px" }} /> Export Complete Dataset (CSV)
            </ButtonComponent>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
