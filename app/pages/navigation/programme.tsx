import { Box, Container, Typography } from "@material-ui/core";
import styles from '../../styles/Home.module.scss';

export default function Ptogramme(): JSX.Element {
    return (
        <Container maxWidth="sm" className={styles.pageContainer}>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>Programme</Typography>
                <Typography variant="body1" component="p" gutterBottom>The Programme will come here</Typography>
            </Box>
        </Container >);
}

