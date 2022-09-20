import { Box, Container, Typography } from "@material-ui/core";
import styles from '../../styles/Home.module.scss';
import Cards from '../../components/Cards';

export default function Faq(): JSX.Element {
    return (
        <Container maxWidth="md" className={styles.pageContainer}>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>Resourses</Typography>
                <p>More info to come :D </p>
                <Cards />

            </Box>
        </Container >);
}

