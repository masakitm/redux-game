// @flow
import React from 'react';
import styles from './style.scss';

type Props = {
  winner: boolean,
  gameEnd: boolean,
  btnAction: Function,
  payload: Object,
  squareValue: boolean
};

export default (props: Props) => {
  const btnColor = () => {
    if (props.squareValue === false) { return 'player2'; }
    if (props.squareValue === true) { return 'player1'; }
    return 'empty';
  };

  return (
    <button
      className={
        `
          ${styles.Button}
          ${styles[btnColor()]}
        `
      }
      onClick={() => {
        if (!props.gameEnd && !props.winner) {
          props.btnAction(props.payload);
        }
      }}
    />
  );
};
