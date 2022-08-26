import { Typography, Container } from "@material-ui/core"
import React from 'react'
import { RegistrationForm } from "../components/RegistrationForm"

export default function RegisterNewParticipant() {
    return (
        <Container align="center" >
            <Typography variant="h4" component="h1" style={{ marginBottom: '20px' }} gutterBottom>Register me for the conference</Typography>
            <RegistrationForm />
        </Container>
    )
}
