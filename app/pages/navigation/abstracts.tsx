import { Box, Container, Typography } from "@material-ui/core";
import styles from '../../styles/Home.module.scss';

export default function Abstracts() {
    return (
        <Container maxWidth="md" className={styles.pageContainer}>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>Abstracts</Typography>
            </Box>
        </Container >);
}

