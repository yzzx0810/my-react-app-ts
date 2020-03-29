import React from 'react';
import styles from './index.module.scss';

export default class Home extends React.Component<any, any>{

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div className={styles.home}>
        home ~~~~~~~~222
      </div>
    );
  }

}