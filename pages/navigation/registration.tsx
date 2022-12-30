import { Box, Button, Container, Typography } from "@material-ui/core";
import TimeLine from "components/TimeLine";
import styles from '../../styles/Home.module.scss';
import { useTranslation } from 'react-i18next';

export default function Registration(): JSX.Element {
    const { t } = useTranslation();

    return (
        <Container maxWidth="md" className={styles.pageContainer}>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>{t("REGISTRATION")}</Typography>
                <Typography variant="body1" component="p" gutterBottom>{t("ABOUT_REGISTRATION")}
                </Typography>
            </Box>
            <TimeLine />
            <Button href='/register-new-participant' color="inherit">{t("REGISTRATION_FORM")}</Button>
        </Container >
    );
}

