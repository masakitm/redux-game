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
  width: 150px;
  height: 150px;
  margin: 5px;
  line-height: 150px;
  vertical-align: top;
  font-size: 3rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
`;
