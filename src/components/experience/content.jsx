import React from "react";
import { AiOutlineMore } from "react-icons/ai";

function Content({
  extraClass,
  title,
  company,
  date,
  description__text,
  description,
}) {
  return (
    <>
      <div className={`${extraClass} mx-4 xl:mx-0`}>
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-white-gray mb-8">
            {title}
          </h1>
          <section className="my-1">
            <div className="flex gap-1 items-center text-text-general mb-3">
              <h2 className="font-semibold text-text-white-gray text-base tracking-wide">
                {company}
              </h2>
              <AiOutlineMore />
              <h3 className="font-semibold text-sm text-text-general tracking-wide">
                {date}
              </h3>
            </div>
            <div>
              <h3 className="text-text-general tracking-wide text-sm sm:text-base mb-4">
                {description__text}
              </h3>
            </div>
            <div className="text-text-general tracking-wide text-sm sm:text-base">{description}</div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Content;
