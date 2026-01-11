import React from "react";
import dynamic from "next/dynamic";

// Lazy load the CarbonNetZero component
const CarbonNetZero = dynamic(() => import("@/components/ESG/CarbonNetZero").then(mod => ({ default: mod.CarbonNetZero })), {
  ssr: true,
  loading: () => <div className="loading-spinner">Loading carbon net zero...</div>,
});

const CarbonNetZeroPage = () => {
  return (
    <>
      <CarbonNetZero />
    </>
  );
};

export default CarbonNetZeroPage;
