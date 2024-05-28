import React from "react";
import styled from "styled-components";

const ContentWrapped = styled.div`
  width: auto;
  height: auto;
  position: relative;
  z-index: 0;
  background: rgb(12, 18, 34);
  background: linear-gradient(
    0deg,
    rgba(12, 18, 34, 1) 0%,
    rgba(15, 23, 42, 1) 40%,
    rgba(15, 23, 42, 1) 50%,
    rgba(15, 23, 42, 1) 60%,
    rgba(12, 18, 34, 1) 100%
  );
`;

const BackgroundCuad = styled.div`
  background-image: url("descarga.svg");
  background-repeat: repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -10;
  opacity: 1;
`;

/**
 * A component that wraps its children with additional styling and elements.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The children elements to be wrapped.
 * @returns {JSX.Element} The wrapped component.
 */
function Wrapped({ children }) {
  return (
    <ContentWrapped className="text-white font-poppins">
      <BackgroundCuad />
      {children}
    </ContentWrapped>
  );
}

export default Wrapped;
