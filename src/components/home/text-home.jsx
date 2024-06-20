import React from "react";
import styled from "styled-components";

const Texto = styled.span`
  font-size: clamp(1.875rem, 0.3125rem + 6.25vw, 3.5rem);
`;

function TextHome({ text }) {
  return (
    <>
      <div className="flex justify-center items-center py-10 text-center mx-4 xl:mx-0">
        <Texto className="font-poppins font-semibold italic text-text-white-gray text-opacity-50">
          <font className="text-text-general opacity-100">
            &#8220;&nbsp;
          </font>
          {text}
          <font className="text-text-general opacity-100">
            &nbsp;&#8221;
          </font>
        </Texto>
      </div>
    </>
  );
}

export default TextHome;
