import styles from '../styles/Home.module.scss';
import { Box, Container, Typography } from "@material-ui/core";
import { useAuth } from "lib/useAuth";
import MyDashboardTabs from '../components/MyDashboardTabs';
import { useTranslation } from 'react-i18next';

const MyDashboard: React.FC = (): JSX.Element => {
    const { user } = useAuth();
    const { t } = useTranslation();

    return (
        <Container>
            <Box my={5} >
                {user && <Typography variant="h4" component="h1" gutterBottom className={styles.myDashboardContainer__helloText}>{`${t("HELLO")}, ${user.nameFirst}!`}</Typography>}
                <div className={styles.myDashboardContainer__tabsContainer}>
                    <MyDashboardTabs />
                </div>
            </Box>
        </Container>);
};

export default MyDashboard;
