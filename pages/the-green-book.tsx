import { Box, Container, Typography } from "@material-ui/core";
import dynamic from "next/dynamic";
import { ComponentType } from "react";
import styles from '../styles/Home.module.scss';

interface IProps {
    readonly file: string;
}

const PDFViewer: ComponentType<IProps> = dynamic(() => import("../components/PDFViewer"), {
    ssr: false,
});

export default function PDF(): JSX.Element {
    return (
        <Container maxWidth="md" className={styles.pageContainer}>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom >The Vihreä Könyv</Typography>
                <PDFViewer file="/GreenBook.pdf" />
            </Box>
        </Container >
    );
}

