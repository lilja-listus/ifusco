import { Container, Typography, Box } from "@material-ui/core"

export default function Accomodation() {
    return (
        <Container maxWidth="md">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>Accomodation</Typography>
                <p>There is no info on accomodation yet</p>
            </Box>
        </Container >)
}

