import { Box, Container, Typography } from "@material-ui/core";
import styles from '../../styles/Home.module.scss';

export default function Accomodation(): JSX.Element {
    return (
        <Container maxWidth="md" className={styles.pageContainer}>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>Accomodation</Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    There is no info on accomodation yet. Just remember Finland is pretty expensive, so start saving money already. Or get some local friends. Or use Tinder.
                </Typography>
            </Box>
        </Container >);
}

