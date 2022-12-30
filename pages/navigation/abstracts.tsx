import { Box, Container, Typography } from "@material-ui/core";
import styles from '../../styles/Home.module.scss';
import { useTranslation } from 'react-i18next';

export default function Abstracts(): JSX.Element {
    const { t } = useTranslation();

    return (
        <Container maxWidth="md" className={styles.pageContainer}>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>{t("ABSTRACTS")}</Typography>
            </Box>
        </Container >);
}

