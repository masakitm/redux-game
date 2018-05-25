// @flow
import React from 'react';
import styled from 'styled-components';

import ButtonCont from '../containers/ButtonCont';
import Message from './Message';

type Props = {
  squares: Array<Object>,
  player: boolean,
  winner: boolean,
  gameEnd: boolean
}

export default (props: Props) => {
  const { squares, player } = props;

  const suit = bool => (bool ? '○' : '×');

  const buttons = squares.map(obj => (
    <ButtonCont
      key={obj.id}
      btnId={obj.id}
      payload={{ id: obj.id, value: suit(props.player) }}
    >
      {obj.value}
    </ButtonCont>
  ));

  const message = (winner, gameEnd) => {
    const win = `Winner: ${suit(!props.player)}`;
    const next = `Next: ${suit(props.player)}`;
    const end = 'Try Again?';

    if (winner && gameEnd) {
      return win;
    }

    if (gameEnd) {
      return end;
    }

    return next;
  };

  return (
    <div>
      <ButtonWrapper>
        { buttons }
      </ButtonWrapper>

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

const ButtonWrapper = styled.div`
  width: 780px;
  margin: 0 auto;
`;
