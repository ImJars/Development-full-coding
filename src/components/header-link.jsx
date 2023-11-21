import React from "react";

function HeaderLink({ classNames, headerLink, linkText }) {
  return (
    <>
      <a 
        href={headerLink}
        className="flex justify-center items-center"
    >
        <span
          className={`${classNames} font-poppins text-xs tracking-wider font-semibold`}
        >
          {linkText}
        </span>
      </a>
    </>
  );
}

export default HeaderLink;
