import React from "react";
import dynamic from "next/dynamic";

// Lazy load the PortfolioDrilldown component
const PortfolioDrilldown = dynamic(() => import("@/components/ESG/PortfolioDrilldown").then(mod => ({ default: mod.PortfolioDrilldown })), {
  ssr: true,
  loading: () => <div className="loading-spinner">Loading portfolio drilldown...</div>,
});

const ProjectsDrilldown = () => {
  return (
    <>
      <PortfolioDrilldown />
    </>
  );
};

export default ProjectsDrilldown;
