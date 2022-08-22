import { Container, Typography, Box, Button } from "@material-ui/core"
import Link from 'next/link'

export default function Index() {
    return (<Container maxWidth="sm">
        <Box my={4}>
            <Typography variant="h5" component="h5" gutterBottom>Welcome to the official website of XXXVII IFUSCO!

                IFUSCO (International Finno-Ugric Students’ Conference) is an annual international conference for and by students interested in matters related to Finno-Ugric (Uralic) languages and peoples. The conference brings together students of various disciplines such as linguistics, ethnography, history, literature, translation theory, and many more. Since 1984, IFUSCO has been held in a different place each year.

                IFUSCO 2022 will take place in Prague from May 23rd to May 27th, 2022. See you in Prague!

                For all participants: we would appreciate it if you could find some time to fill in this evaluation form. Thank you and thank you for attending IFUSCO!</Typography>
            <Link href="/about"><Button variant="contained" color="primary">Go to about page</Button></Link>
        </Box> </Container >)
}

