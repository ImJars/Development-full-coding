import React from "react";
import FotosConfig from "./fotosConfig";

function Fotos() {
  return (
    <>
      <h1 className="font-bold text-xl mb-1">Fotos</h1>
      <div className="border-t border-opacity-20 border-text-general" />
      <div className="my-4">
        <div className="grid grid-cols-4 gap-4">
          <FotosConfig link__foto={"Image_1.jpg"} classNames={"col-span-2"} />
          <FotosConfig link__foto={"Image_2.jpg"} />
          <FotosConfig link__foto={"Image_3.jpg"} />
          <FotosConfig link__foto={"Image_4.jpg"} />
          <FotosConfig link__foto={"Image_5.jpg"} />
          <FotosConfig link__foto={"Image_6.jpg"} classNames={"col-span-2"} />
          <FotosConfig link__foto={"Image_7.jpg"} classNames={"col-span-2"} />
          <FotosConfig link__foto={"Image_8.jpg"} />
          <FotosConfig link__foto={"Image_9.jpg"} />
        </div>
      </div>
    </>
  );
}

export default Fotos;
