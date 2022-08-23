import { Container, Typography, Box, Button } from "@material-ui/core"
import Link from 'next/link'

export default function Contact() {
    return (<Container maxWidth="sm"> <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>Contact</Typography>
        <p>Feel free to contact us via e-mail at ifusco2022@gmail.com

            Also make sure to follow us on Facebook and vKontakte!

            The main organizers of IFUSCO XXXVIII are: turun Sugrit

            IFUSCO XXXVIII is being organized by pretty awesome peeps.</p>
    </Box> </Container >)
}

