import React from "react";
import dynamic from "next/dynamic";

// Lazy load the ReportsExport component
const ReportsExport = dynamic(() => import("@/components/ESG/ReportsExport").then(mod => ({ default: mod.ReportsExport })), {
  ssr: true,
  loading: () => <div className="loading-spinner">Loading reports...</div>,
});

const ReportsPage = () => {
  return (
    <>
      <ReportsExport />
    </>
  );
};

export default ReportsPage;
