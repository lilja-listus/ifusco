import { Container, Typography, Box, makeStyles, } from "@material-ui/core"
import { useAuth } from "lib/useAuth";
import MyCabinetTabs from '../components/MyCabinetTabs'

export default function MyCabinet() {
    const { user } = useAuth();

    const classes = useStyles()

    return (<Container>
        <Box my={5} >
            {user && <Typography variant="h4" component="h1" gutterBottom className={classes.helloText}>{`Hello, ${user.nameFirst}!`}</Typography>}
            <div className={classes.tabsContainer}>
                <MyCabinetTabs />
            </div>
        </Box>
    </Container >)
}

const useStyles = makeStyles(() => ({
    helloText: { margin: "0 auto" },
    tabsContainer: { width: "80rem", marginTop: "30px" }
})) 