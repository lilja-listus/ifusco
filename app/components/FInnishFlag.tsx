import React from 'react';
import styles from '../styles/Home.module.scss';

const FinnishFlag: React.FC = (): JSX.Element => {
    return (
        <div className={styles.flag__container}>
            <div className={styles.flag__lineHorisontal} />
            <div className={styles.flag__lineVertical} />
        </div>
    );
};

export default FinnishFlag;

