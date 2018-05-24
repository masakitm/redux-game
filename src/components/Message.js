// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  children: string
}

export default (props: Props) => (
  <Head2>{props.children}</Head2>
);

const Head2 = styled.h2`
  position: fixed;
  bottom: 2rem;
  right: 0;
  padding: 1rem 1.5rem;
  background: #222;
  color: #fff;
`;
