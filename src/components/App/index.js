// @flow
import React from 'react';

import Header from '../Header/';
import BoardCont from '../../containers/BoardCont';

import styles from './App.scss';

export default () => (
  <div className={styles.Wrapper}>
    <div className={styles.Content}>
      <Header>五目並べ redux</Header>
      <BoardCont />
    </div>
  </div>
);
