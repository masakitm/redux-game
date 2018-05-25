// @flow
import React from 'react';
import styles from './style.scss';

type Props = {
  children: string
};

export default (props: Props) => (
  <header className={styles.header}>
    <h1 className={styles.h1}>{props.children}</h1>
  </header>
);
