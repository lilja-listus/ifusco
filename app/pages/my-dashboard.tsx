import styles from '../styles/Home.module.scss';
import { Box, Container, Typography } from "@material-ui/core";
import { useAuth } from "lib/useAuth";
import MyDashboardTabs from '../components/MyDashboardTabs';

export default function MyDashboard() {
    const { user } = useAuth();

    return (
        <Container>
            <Box my={5} >
                {user && <Typography variant="h4" component="h1" gutterBottom className={styles.myDashboardContainer__helloText}>{`Hello, ${user.nameFirst}!`}</Typography>}
                <div className={styles.myDashboardContainer__tabsContainer}>
                    <MyDashboardTabs />
                </div>
            </Box>
        </Container >);
}

