/** TODO: TO ADD TRANSLATIONS WHEN TEXT */
import { Box, Container, Typography } from "@material-ui/core";
import styles from '../../styles/Home.module.scss';
import { useTranslation } from 'react-i18next';

interface IAboutObject {
    readonly label: string;
    readonly info: string;

}

export default function AboutTurku(): JSX.Element {

    const { t } = useTranslation();

    const aboutInfo: IAboutObject[] = [
        {
            info: t("INFO_ON_GETTING_AROUND"), label: t("GETTING_AROUND"),
        },
        {
            info: t("INFO_ON_GETTING_TO_TURKU"), label: t("GETTING_TO_TURKU"),
        },
        {
            info: t("INFO_ON_RESTAURANTS_SHOPS"), label: t("RESTAURANTS_SHOPS"),
        },
        {
            info: t("INFO_ON_OTHER_PLACES"), label: t("OTHER_PLACES"),
        },
        {
            info: t("INFO_ON_MONEY"), label: t("MONEY"),
        },

    ];

    return (<Container maxWidth="md" className={styles.pageContainer} >
        <Box my={4}>
            <Typography variant="h4" gutterBottom>{t("ABOUT_TURKU")}</Typography>
            {aboutInfo.map(({ label, info }) => (
                <div key={label} style={{ marginBottom: '20px' }}>
                    <Typography variant="h5" component="h1" style={{ marginBottom: '10px' }}>{label}</Typography>
                    <Typography variant="body1" component="p" gutterBottom>{info}</Typography>
                </div>))}

        </Box>
    </Container>
    );
}


