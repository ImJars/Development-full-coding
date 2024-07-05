import React from "react";

function FooterLink({ link, classNames, text }) {
  return (
    <>
      <div className="flex justify-center sm:justify-end sm:items-center mt-1 sm:mt-0 font-sans">
        <a
          href={link}
        >
          <h1 className={`${classNames} font-poppins text-sm sm:text-sm mb-2 text-text-white-gray`}>
            {text}
          </h1>
        </a>
      </div>
    </>
  );
}

export default FooterLink;
