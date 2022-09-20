import { Box, Container, Typography } from "@material-ui/core";
import styles from '../../styles/Home.module.scss';

export default function Ptogramme() {
    return (
        <Container maxWidth="sm" className={styles.pageContainer}>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>Programme</Typography>
            </Box>
        </Container >);
}

