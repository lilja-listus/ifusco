import { Container, Typography, Box, } from "@material-ui/core"
import { useAuth } from "lib/useAuth";
import Link from 'next/link'
import MyCabinetTabs from '../components/MyCabinetTabs'

export default function MyCabinet() {
    const { user } = useAuth();

    return (<Container >
        <Box my={5} >
            {user && <Typography variant="h4" component="h1" gutterBottom style={{ margin: "0 auto" }}>{`Hello, ${user.nameFirst}!`}</Typography>}
            <div style={{ width: "80rem", marginTop: "30px" }}>
                <MyCabinetTabs />
            </div>
        </Box> </Container >)
}

