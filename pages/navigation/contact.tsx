import { Box, Container, Link, Typography } from "@material-ui/core";
import styles from '../../styles/Home.module.scss';
import Sugri from '../../img/sugri-vaatteet.jpeg';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Contact(): JSX.Element {
    const { t } = useTranslation();

    return (
        <Container maxWidth="md" className={styles.pageContainer} fixed>
            <Box my={4} >
                <Typography variant="h4" component="h1" gutterBottom>{t("CONTACT")}</Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    {t("CONTACT_VIA_MAIL")} [THE EMAIL]
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    {t("FOLLOW_ON_FACEBOOK")}
                    (<Link color="primary" href='https://www.facebook.com/ifusco2022' key='facebook-link' target="_blank" aria-label="To know more go to our facebook page">https://www.facebook.com/ifusco2022</Link>)
                    and vKontakte [THE LINK]!
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    {t("SUGRIT_ORGINISERS")}(<Link color="primary" href='https://www.facebook.com/ifusco2022' key='facebook-link' target="_blank" aria-label="To know more go to our page">https://turunsugrit.wordpress.com/</Link>)
                </Typography>
                <div
                    className={styles.indexPage__image}>
                    <Image priority src={Sugri} width={350} height={300} alt="Sugri" />
                </div>

            </Box>
        </Container >)
        ;
}

