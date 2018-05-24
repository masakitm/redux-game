// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  children: string
};

export default (props: Props) => (
  <Wrapper>
    <h1>{props.children}</h1>
  </Wrapper>
);

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #222;
  padding: 5px 10px;
  text-align: left;

  h1 {
    font-size: 0.9rem;
    color: #fff;
  }
`;
