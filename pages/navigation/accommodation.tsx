import { Box, Container, Typography } from "@material-ui/core";
import styles from '../../styles/Home.module.scss';
import Image from 'next/image';
import Valo from '../../img/valo.jpg';
import { useTranslation } from 'react-i18next';

export default function Accommodation(): JSX.Element {
    const { t } = useTranslation();

    return (
        <Container maxWidth="md" className={styles.pageContainer}>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>{t("ACCOMMODATION")}</Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    {t("INFO_ON_ACCOMMODATION")}
                </Typography>
                <Image src={Valo} />
            </Box>
        </Container >);
}

