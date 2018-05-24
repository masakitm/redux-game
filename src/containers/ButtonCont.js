import { connect } from 'react-redux';

import Button from '../components/Button';
import { changeSquare, winner, gameEnd } from '../modules/game';

const mapState = (state, props) => ({
  payload: {
    id: props.payload.id,
    value: props.payload.value,
  },
  children: props.children,
  winner: state.game.winner,
});

const mapDispatch = dispatch => ({
  btnAction(payload) {
    dispatch(changeSquare(payload));
    dispatch(winner(payload));
    dispatch(gameEnd());
  },
});

export default connect(mapState, mapDispatch)(Button);
