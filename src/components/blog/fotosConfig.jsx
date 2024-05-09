import React from "react";

function FotosConfig({ link__foto, classNames }) {
  return (
    <>
      <a
        href={  link__foto }
        className={`${classNames} object-cover w-full h-full rounded-xl`}
      >
        <img
          src={  link__foto }
          alt=""
          className={`${classNames} object-cover w-full h-full rounded-xl`}
        />
      </a>
    </>
  );
}

export default FotosConfig;
