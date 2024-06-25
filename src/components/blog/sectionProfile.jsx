import React from "react";

function SectionProfile({ classNames, children }) {
  return (
    <>
      <div className={`${classNames} bg-table-color rounded-lg border border-opacity-10 border-text-general px-4`}>
        {children}
      </div>
    </>
  );
}

export default SectionProfile;
