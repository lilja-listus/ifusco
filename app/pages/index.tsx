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


const Index: React.FC = (): JSX.Element => {
    return (

        <Container className={styles.index__container} >
            <Box>
                <div className={styles.index}>
                    <Image src={Linna} width={250} height={200} className={styles.index__img1} />
                    <Image src={Tuomiokirkko} width={250} height={200} className={styles.index__img3} />
                    <Image src={Kirjasto} width={250} height={200} className={styles.index__img2} />
                </div>
                <Link href={'/navigation/about'} key={'about'}>
                    <h2 className={styles.index__ifusco}>IFUSCO XXXVII, Turku, Finland</h2>
                </Link>
                <FinnishFlag />
            </Box>

            <Box my={3} style={{ marginTop: '300px' }} align="center">
                <Typography variant="h5" component="h1" className={styles.registerNewParticipant__title} gutterBottom>Applications are open!</Typography>
                <Typography variant="h6" gutterBottom> Sign up before October 15th</Typography>
                <Button href='/register-new-participant' color="inherit">Register here</Button>
            </Box>

            <Box my={5} align="center" style={{ marginTop: '30px' }} >
                <Typography variant="h6" gutterBottom> 39 conferences since 1984</Typography>
                <Typography variant="h6" gutterBottom> 10 countries</Typography>
                <Typography variant="h6" gutterBottom> 23 cities</Typography>
            </Box>

            <Box my={3} align="center" style={{ marginTop: '30px' }} >
                <Typography ariant="body2" gutterBottom> IFUSCO (International Finno-Ugric Students’ Conference) is an annual international conference for and by students interested in matters related to Finno-Ugric (Uralic) languages and peoples. The conference brings together students of various disciplines such as linguistics, ethnography, history, literature, translation theory, and many more. Since 1984, IFUSCO has been held in a different place each year. IFUSCO 2022 will take place in Prague from May 23rd to May 27th, 2022. See you in Prague! For all participants: we would appreciate it if you could find some time to fill in this evaluation form. Thank you and thank you for attending IFUSCO!</Typography>
            </Box>

            <Box my={3} align="center" style={{ marginTop: '30px' }} >
                <Typography variant="h5" component="h1" className={styles.registerNewParticipant__title} gutterBottom>Schedule</Typography>
                <Timeline />
            </Box>
        </Container >

    );
};

export default Index;

