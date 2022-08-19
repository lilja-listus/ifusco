import { Container, Typography, Box, Button } from "@material-ui/core"
import Link from 'next/link'

export default function MyCabinet() {
    return (<Container maxWidth="sm"> <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>MyCabinet</Typography>
    </Box> </Container >)
}

