// @flow
import React from 'react';

import ButtonCont from '../../containers/ButtonCont';
import Message from '../Message/';
import styles from './style.scss';

type Props = {
  squares: Array<Object>,
  player: boolean,
  winner: boolean,
  gameEnd: boolean
}

export default (props: Props) => {
  const { squares, player } = props;

  const playerName = bool => (bool ? 'player1' : 'player2');
  const message = (winner, gameEnd) => {
    const win = `Winner: ${playerName(!props.player)}`;
    const next = `Next: ${playerName(props.player)}`;
    const end = 'Try Again?';

    if (winner && gameEnd) { return win; }
    if (gameEnd) { return end; }
    return next;
  };

  const buttons = squares.map(obj => (
    <ButtonCont
      className={styles.Wrapper}
      key={obj.id}
      btnId={obj.id}
      payload={{ id: obj.id, value: props.player }}
      squareValue={obj.value}
    />
  ));

  return (
    <div>
      <div className={styles.wrapper}>
        { buttons }
      </div>

      <Message
        winner={props.winner}
        gameEnd={props.gameEnd}
        player={player}
      >
        {message(props.winner, props.gameEnd)}
      </Message>
    </div>
  );
};

