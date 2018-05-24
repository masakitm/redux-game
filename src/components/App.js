// @flow
import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import BoardCont from '../containers/BoardCont';


export default () => (
  <Wrapper>
    <Content>
      <Header>三目並べ redux</Header>
      <BoardCont />
    </Content>
  </Wrapper>
);

const Wrapper = styled.div`
  display: table;
  width: 100vw;
  height: 100vh;
  text-align: center;
  background: linear-gradient(-135deg,#e4a972,#9941d8);
`;

const Content = styled.div`
  position: relative;
  display: table-cell;
  vertical-align: middle;
`;
