import { Container, Typography, Box, Button } from "@material-ui/core"
import { useAuth } from "lib/useAuth";
import Link from 'next/link'

export default function MyCabinet() {
    const { user } = useAuth();

    return (<Container maxWidth="sm">
        <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>MyCabinet</Typography>
            {user && <p>{`Hello, ${user.nameFirst}!`}</p>}
        </Box> </Container >)
}

