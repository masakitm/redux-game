// ducks
import { createAction, handleActions } from 'redux-actions';

import targetList from '../other/targetList';

// actions
export const changeSquare = createAction('CHANGE_SQUARE');
export const winner = createAction('WINNER');
export const gameEnd = createAction('GAME_END');

// state
const buttonLength = 36;
const squares = [];
for (let i = 0; i < buttonLength; i += 1) {
  squares.push({ id: i, value: '' });
}

const initState = {
  buttonLength,
  squares,
  player: true,
  winner: false,
  gameEnd: false,
};

// reducer
export const game = handleActions({
  CHANGE_SQUARE: (state, action) => {
    let statusChanged = false;

    const updatedSquares = [...state.squares].map((obj) => {
      if (obj.id === action.payload.id && obj.value === '') {
        obj.value = action.payload.value;
        statusChanged = !statusChanged;
      }
      return obj;
    });

    const player = statusChanged ? !state.player : state.player;

    return (
      {
        ...state,
        squares: updatedSquares,
        player,
      }
    );
  },
  WINNER: (state, action) => {
    const squareList = [...state.squares];

    const checkedSquareIds = (arr, value) => arr.map(obj => (
      obj.value === value ? obj.id : null
    ));
    const currentIds = checkedSquareIds(squareList, action.payload.value);

    const winnerExists = targetList.some((val) => {
      const [a, b, c, d, e] = val;
      return (
        currentIds.includes(a)
        && currentIds.includes(b)
        && currentIds.includes(c)
        && currentIds.includes(d)
        && currentIds.includes(e)
      );
    });

    return {
      ...state,
      winner: winnerExists,
      gameEnd: winnerExists,
    };
  },
  GAME_END: (state) => {
    const squareList = [...state.squares];

    const isBoardFilled = () => {
      if (state.winner) { return true; }
      return !squareList.some(obj => obj.value === '');
    };

    return {
      ...state,
      gameEnd: isBoardFilled(),
    };
  },
}, initState);

