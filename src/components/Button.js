// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  winner: boolean,
  btnAction: Function,
  value: string,
  payload: Object,
  children: string
};

export default (props: Props) => (
  <Element
    onClick={() => {
      if (!props.value && !props.winner) {
        props.btnAction(props.payload);
      }
    }}
  >
    {props.children}
  </Element>
);

const Element = styled.button`
  width: 120px;
  height: 120px;
  margin: 5px;
  line-height: 120px;
  vertical-align: top;
  font-size: 3rem;
  border-radius: 10px;
  border: none;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  background: linear-gradient(0deg,#ddd,#eee);
  color: #333;
`;
