import { Box, Container, Typography } from "@material-ui/core";
import dynamic from "next/dynamic";
import styles from '../styles/Home.module.scss'

const PDFViewer = dynamic(() => import("../components/PDFViewer"), {
    ssr: false
});

export default function PDF() {
    return (
        <Container maxWidth="md" className={styles.pageContainer}>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom align="center">The Vihreä Könyv</Typography>
                <PDFViewer file="/GreenBook.pdf" />
            </Box>
        </Container >
    )
}

