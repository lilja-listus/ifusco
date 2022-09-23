import React from 'react';
import FinnishFlag from 'components/FInnishFlag';
import styles from '../styles/Home.module.scss';
import Linna from '../img/linna.jpg';
import Kirjasto from '../img/library.jpg';
import Tuomiokirkko from '../img/tuomiokirkko.jpg';
import Image from 'next/image';
import Link from 'next/link';


const Index: React.FC = (): JSX.Element => {
    return (
        <div >
            <div className={styles.test}>
                <Image src={Linna} width={250} height={200} className={styles.test__img1} />
                <Image src={Tuomiokirkko} width={250} height={200} className={styles.test__img3} />
                <Image src={Kirjasto} width={250} height={200} className={styles.test__img2} />
            </div>
            <Link href={'/navigation/about'} key={'about'}>
                <h2 className={styles.test__ifusco}>IFUSCO XXXVII, Turku, Finland</h2>
            </Link>
            <FinnishFlag />
        </div>
    );
};

export default Index;

