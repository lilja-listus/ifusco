import { Box, Button, Container, Typography } from "@material-ui/core";
import TimeLine from "components/TimeLine";
import styles from '../../styles/Home.module.scss';

export default function Registration(): JSX.Element {
    return (
        <Container maxWidth="md" className={styles.pageContainer}>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>Registration</Typography>
                <Typography variant="body1" component="p" gutterBottom>Registration is open from [THE BEGINNING] to [THE END], 2023.
                    The registration form can be found here.
                    Due to the current epidemiological situation, the conference will be held in hybrid form: both in-person and online participation (via Zoom) will be possible.
                    A conference participation fee of [THE COST] EUR [THE WAY TO PAY].
                    It is also possible to participate as a volunteer[WAYS TO PARTICIPATE].
                </Typography>
            </Box>
            <TimeLine />
            <Button href='/register-new-participant' color="inherit">Registration Form</Button>
        </Container >
    );
}

