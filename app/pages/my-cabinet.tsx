import { Container, Typography, Box, Button } from "@material-ui/core"
import { useAuth } from "lib/useAuth";
import Link from 'next/link'
import MyCabinetTabs from '../components/MyCabinetTabs'

export default function MyCabinet() {
    const { user } = useAuth();

    return (<Container >
        <Box my={5}>
            <Typography variant="h4" component="h1" gutterBottom style={{ margin: "0 auto" }}>MyCabinet</Typography>
            {user && <p>{`Hello, ${user.nameFirst}!`}</p>}

            <div style={{ width: "80rem", marginTop: "100px", backgroundColor: "pink" }}>
                <MyCabinetTabs />
            </div>
        </Box> </Container >)
}

