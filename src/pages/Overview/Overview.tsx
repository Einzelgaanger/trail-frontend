"use client";
import React from "react";
import { Row, Col } from "antd";
import { OverviewStat } from "@/components/Overview/OverviewStat";
import Map from "@/components/Overview/Map";
import DoughnutChart from "@/components/Overview/DoughnutChart";

const Overview = () => {
  return (
    <div className="col-12">
      {/* <h1 className="view-title">Overview</h1> */}
      <div style={{ overflow: "hidden" }}>
        <OverviewStat />
        <Row gutter={[8, 8]}>
          <Col xs={{ span: 24 }} lg={{ span: 18 }}>
            <Map />
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 6 }}>
            <DoughnutChart />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Overview;
