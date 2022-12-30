import { Box, Container, Typography } from "@material-ui/core";
import styles from '../../styles/Home.module.scss';
import Cards from '../../components/Cards';
import NewsCard from "components/NewsCard";
import { INews } from '../../interfaces/INews';
import { useTranslation } from 'react-i18next';

export default function Faq(): JSX.Element {
    const { t } = useTranslation();
    const news: INews[] = [
        { image: '/fu-flag.png', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", title: 'Dummy news example', },
        { image: '/fu-flag.png', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", title: 'Dummy news example', }
    ];

    return (
        <Container maxWidth="md" className={styles.pageContainer}>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>{t("NEWS_AND_RESOURCES")}</Typography>
                <Cards />
                {news.map(item => <NewsCard title={item.title} text={item.text} image={item.image} key={item.title} />)}
            </Box>
        </Container >);
}

