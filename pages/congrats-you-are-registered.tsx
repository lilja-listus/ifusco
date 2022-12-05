import { Box, CardMedia, Container, Typography } from "@material-ui/core";
import styles from '../styles/Home.module.scss';

const CongratsYouAreRegistered: React.FC = (): JSX.Element => {

    return (<Container >
        <Box my={5} className={styles.congratsNewParticipant} >
            <Typography variant="h5" component="h1" className={styles.congratsNewParticipant__title}>Congrats, you are registered for the conference. Check your mail</Typography>
            <CardMedia
                height="450"
                width="100"
                image='/baloons.jpg'
                title="Рускій ваєнний карабль іді ..."
                component="img"
            />
        </Box>
    </Container >);
};

export default CongratsYouAreRegistered;
