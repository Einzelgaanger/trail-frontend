import React from "react";
import dynamic from "next/dynamic";

// Lazy load the PFISubmissions component
const PFISubmissions = dynamic(() => import("@/components/ESG/PFISubmissions").then(mod => ({ default: mod.PFISubmissions })), {
  ssr: true,
  loading: () => <div className="loading-spinner">Loading PFI import...</div>,
});

const PFIImportPage = () => {
  return (
    <>
      <PFISubmissions />
    </>
  );
};

export default PFIImportPage;
