import { Box, Container, Typography } from "@material-ui/core";
import styles from '../../styles/Home.module.scss';
import { useTranslation } from 'react-i18next';

export default function Ptogramme(): JSX.Element {
    const { t } = useTranslation();

    return (
        <Container maxWidth="sm" className={styles.pageContainer}>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>{t("PROGRAMME")}</Typography>
                <Typography variant="body1" component="p" gutterBottom>{t("PROGRAMME_WILL_BE_HERE")}</Typography>
            </Box>
        </Container >);
}

