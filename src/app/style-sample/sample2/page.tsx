'use client';

import { styled } from 'styled-components';

const StyledTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #383d3d;
`;

const StyledWrapper = styled.section`
  padding: 4em;
  background: #ffe3e5;
`;

export default function Sample2Page() {
  return (
    <div>
      <StyledWrapper>
        <StyledTitle>Hello World!</StyledTitle>
      </StyledWrapper>
    </div>
  );
}
