import React from "react";

function FooterIcons({ link, children, classNames}) {
  return (
    <>
      <a href={link} 
        target="_blank"
        rel="noopener noreferrer"
        className={`${classNames} flex justify-center items-center`}
    >
        <span>{children}</span>
      </a>
    </>
  );
}

export default FooterIcons;
