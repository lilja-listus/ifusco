import React from 'react';
import FinnishFlag from 'components/FInnishFlag';
import styles from '../styles/Home.module.scss';
import Linna from '../img/linna.jpg';
import Kirjasto from '../img/library.jpg';
import Tuomiokirkko from '../img/tuomiokirkko.jpg';
import Image from 'next/image';
import Link from 'next/link';
import Timeline from '../components/TimeLine';
import { Box, Button, Container, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const Index: React.FC = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <Container className={styles.index__container} maxWidth="md" >
            <Box>
                <div className={styles.index}>
                    <Image src={Linna} width={250} height={200} className={styles.index__img1} />
                    <Image src={Tuomiokirkko} width={250} height={200} className={styles.index__img3} />
                    <Image src={Kirjasto} width={250} height={200} className={styles.index__img2} />
                </div>
                <Link href={'/navigation/about'} key={'about'}>
                    <h2 className={styles.index__ifusco}>{t("IFUSCO_NAME")}</h2>
                </Link>
                <FinnishFlag />
            </Box>
            < div className={styles.index__firstBox} >

                <Box my={3} >
                    <Typography variant="h5" component="h1" className={styles.registerNewParticipant__title} gutterBottom>Applications are open!</Typography>
                    <Typography variant="h6" gutterBottom>{t("SIGN_UP_BEFORE")}</Typography>
                    <Button href='/register-new-participant' color="inherit">{t("REGISTER_HERE")}</Button>
                </Box >

                <Box my={5} className={styles.index__box} >
                    <Typography variant="h6" gutterBottom>{t("CONFERENCES_SINCE_1984")}</Typography>
                    <Typography variant="h6" gutterBottom>{t("AMOUNT_COUNTRIES")}</Typography>
                    <Typography variant="h6" gutterBottom>{t("AMOUNT_CITIES")}</Typography>
                </Box>
                <Box my={3} className={styles.index__box} >
                    <Typography variant="body2" gutterBottom>{t("IFUSCO_DESCRIPTION")}</Typography>
                </Box>

                <Box my={3} className={styles.index__box} >
                    <Typography variant="h5" component="h1" className={styles.registerNewParticipant__title} gutterBottom>Schedule</Typography>
                    <Timeline />
                </Box>
            </div>
        </Container >

    );
};

export default Index;

