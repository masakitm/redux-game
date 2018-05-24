import { connect } from 'react-redux';

import Board from '../components/Board';

const mapState = state => ({
  squares: state.game.squares,
  player: state.game.player,
  winner: state.game.winner,
  gameEnd: state.game.gameEnd,
});

export default connect(mapState)(Board);
