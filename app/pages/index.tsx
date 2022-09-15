import styles from '../styles/Home.module.scss'
import { Container, Typography, Box } from "@material-ui/core"
import Image from 'next/image'
import perse from '../img/perse.jpg'
import React from 'react'

export default function Index() {

    return (
        <Container maxWidth="md" className={`${styles.indexPage} ${styles.pageContainer}`}>
            <Box my={4}>
                <Typography variant="h5" component="h5" align="center" >Welcome to the official website of XXXVII IFUSCO!</Typography>
                <div
                    className={styles.indexPage__image}>
                    <Image priority src={perse} width={250} height={200} alt="perse" />
                </div>

                <Typography variant="body1" align="center">
                    IFUSCO (International Finno-Ugric Students’ Conference) is an annual international conference for and by students interested in matters
                    related to Finno-Ugric (Uralic) languages and peoples. The conference brings together students of various disciplines such as linguistics,
                    ethnography, history, literature, translation theory, and many more. Since 1984, IFUSCO has been held in a different place each year.

                    IFUSCO 2022 will take place in Prague from May 23rd to May 27th, 2022. See you in Prague!

                    For all participants: we would appreciate it if you could find some time to fill in this evaluation form.
                    Thank you and thank you for attending IFUSCO!</Typography>
            </Box>
        </Container >)
}

