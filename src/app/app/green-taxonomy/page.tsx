import React from "react";
import dynamic from "next/dynamic";

// Lazy load the GreenTaxonomy component
const GreenTaxonomy = dynamic(() => import("@/components/ESG/GreenTaxonomy").then(mod => ({ default: mod.GreenTaxonomy })), {
  ssr: true,
  loading: () => <div className="loading-spinner">Loading green taxonomy...</div>,
});

const GreenTaxonomyPage = () => {
  return (
    <>
      <GreenTaxonomy />
    </>
  );
};

export default GreenTaxonomyPage;
