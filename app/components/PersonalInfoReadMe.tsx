import { Container, Typography, Box, Button, } from "@material-ui/core"
import Link from 'next/link'
import InfoField from "./InfoField"
import React from 'react'


export default function PersonalInfoReadMe({ user, setReadme }) {
    const userInfoObject = [
        { label: "First Name", value: user.nameFirst },
        { label: "Last Name", value: user.nameLast },
        { label: "Email", value: user.email },
        { label: "University", value: user.university },
        { label: "Country", value: user.country },
    ]

    return (
        <>
            <Box my={5}>
                <Typography variant="h5" component="h1" gutterBottom>About Me</Typography>
                {user && userInfoObject.map(infoField => (
                    <Typography variant="h6" component="h6" key={infoField.label} gutterBottom>{`${infoField.label}: ${infoField.value || 'N/A'}`}</Typography>
                ))
                }
            </Box>
            <Button color="inherit" onClick={() => setReadme(false)}>Edit</Button>


        </>
    )
}

