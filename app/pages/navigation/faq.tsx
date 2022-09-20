import { Box, Container, Typography } from "@material-ui/core";
import styles from '../../styles/Home.module.scss';

export default function Faq() {
    return (
        <Container maxWidth="md" className={styles.pageContainer}>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>Faq</Typography>
                <p>More info to come :D </p>
            </Box>
        </Container >);
}

