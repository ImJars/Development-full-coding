import React from "react";

function SectionProfile({ children }) {
  return (
    <>
      <div className="flex-1 bg-table-color rounded-lg border border-opacity-10 border-text-general px-4 py-5">
        {children}
      </div>
    </>
  );
}

export default SectionProfile;
