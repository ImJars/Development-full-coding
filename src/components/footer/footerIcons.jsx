import React from "react";

function FooterIcons({ link, children, classNames}) {
  return (
    <>
      <a href={link} 
        target="_blank"
        rel="noopener noreferrer"
        className={`${classNames} text-text-general flex justify-center items-center transition-all ease-in-out duration-300 hover:scale-125`}
    >
        <span>{children}</span>
      </a>
    </>
  );
}

export default FooterIcons;
