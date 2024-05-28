import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsCheck2Square } from "react-icons/bs";
import styled from "styled-components";

const TilSectionTitle = styled.div`
  .Title-Name {
    font-size: clamp(1.875rem, 0.3125rem + 6.25vw, 4.5rem);
  }
  .Subtitle-Text {
    font-size: clamp(0.875rem, 0.503rem + 1.4881vw, 1.5rem);
  }
  .dynamic-text {
    font-size: clamp(1.125rem, 0.6539rem + 2.2167vw, 2.25rem);
  }
`;

function TodayComponent({
  title,
  tag_1,
  tag_2,
  tag_3,
  description,
  link_1,
  link_2,
  link1,
  link2,
}) {
  return (
    <>
      <TilSectionTitle className="bg-table_activate font-sans rounded-lg">
        <div className="py-4 px-4">
          <div className="flex">
            <div className="flex justify-center items-center space-x-2">
              <BsCheck2Square className="text-base sm:text-2xl text-text-white-gray" />
              <h1 className="Subtitle-Text text-text-white-gray text-sm sm:text-4xl font-bold">
                {title}
              </h1>
            </div>
          </div>
          <div className="flex space-x-2 my-2 sm:my-0">
            <h1
              className="text-text-purple text-xs flex justify-center items-center bg-text-purple bg-opacity-10 px-2 rounded-full
                            font-light underline"
            >
              {tag_1}
            </h1>
            <h2
              className="text-text-purple text-xs flex justify-center items-center bg-text-purple bg-opacity-10 px-2 rounded-full
                  font-light underline"
            >
              {tag_2}
            </h2>
            <h3
              className="text-text-purple text-xs flex justify-center items-center bg-text-purple bg-opacity-10 px-2 rounded-full
                  font-light underline"
            >
              {tag_3}
            </h3>
          </div>
          <h2 className="text-text-general text-xs sm:text-lg mt-1">
            {description}
          </h2>
          <div className="flex space-x-2 mt-2 sm:mt-2 items-center">
            <a
              className="text-text-purple flex space-x-1 items-center hover:text-text-white-gray hover:text-opacity-95
                          transition duration-200 ease-in-out"
              href={link1}
              target="_blank"
              rel="noreferrer"
            >
              <h1 className="text-sm sm:text-base font-light">{link_1}</h1>
              <div>
                <BiLinkExternal className="text-xs" />
              </div>
            </a>
            <h1 className="text-text-general cursor-default">—</h1>
            <a
              className="text-text-purple  flex space-x-1 items-center hover:text-text-white-gray hover:text-opacity-95
                          transition duration-200 ease-in-out"
              href={link2}
              target="_blank"
              rel="noreferrer"
            >
              <h1 className="text-sm sm:text-base font-light">{link_2}</h1>
              <div>
                <BiLinkExternal className="text-xs" />
              </div>
            </a>
          </div>
        </div>
      </TilSectionTitle>
    </>
  );
}

export default TodayComponent;
