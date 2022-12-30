import { Box, CardMedia, Container, Typography } from "@material-ui/core";
import styles from '../styles/Home.module.scss';
import { useTranslation } from 'react-i18next';

const CongratsYouAreRegistered: React.FC = (): JSX.Element => {
    const { t } = useTranslation();

    return (<Container >
        <Box my={5} className={styles.congratsNewParticipant} >
            <Typography variant="h5" component="h1" className={styles.congratsNewParticipant__title}>{t("CONGRATS_REGISTERED_CONFERENCE")}</Typography>
            <CardMedia
                height="510"
                image='/congrats.jpg'
                title="Рускій ваєнний карабль іді ..."
                component="img"
            />
        </Box>
    </Container >);
};

export default CongratsYouAreRegistered;
