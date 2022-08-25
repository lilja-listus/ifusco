import { Container, Typography, Box } from "@material-ui/core"

export default function Registration() {
    return (<Container maxWidth="sm">
        <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>Registration</Typography>
            <p>Registration is open from January 15th to March 20th, 2022.

                The registration form can be found here.

                Due to the current epidemiological situation, we have decided to hold the conference in hybrid form: both in-person and online participation (via Zoom) will be possible.

                A conference participation fee of 10 EUR will be collected at the conference venue from participants who attend IFUSCO in person. No participation fee will be collected from those who attend the conference virtually.

                It is possible to register for an optional course in SIS and obtain 3 E-Credits for your participation. The course can be found in SIS under the title IFUSCO – International Finno-Ugric Students’ Conference (code AFN200044). The information about the course is in Czech and English and the course is also suitable for foreign and/or exchange students.

                It is also possible to participate as a volunteer (during the week of the conference, i.e. May 23-27). In this case we can offer cooperation in a friendly team and within a highly inspiring community of Finno-Ugric enthusiasts.</p>
        </Box>
    </Container >)
}

