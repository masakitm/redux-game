// @flow
import React from 'react';

import styles from './style.scss';

type Props = {
  children: string
}

export default (props: Props) => (
  <h2 className={styles.Message}>{props.children}</h2>
);

