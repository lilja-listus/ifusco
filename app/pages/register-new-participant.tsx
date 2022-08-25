import { TextField, Box, Typography, Button, Container } from "@material-ui/core"
import { useAuth } from "../lib/useAuth"
import React, { useState } from 'react'
import { useRegisterParticipantMutation } from "../lib/graphql/registerparticipant.graphql"

export default function RegisterNewParticipant() {
    const { user } = useAuth()
    const [registerParticipantMutation] = useRegisterParticipantMutation()


    const [email, setEmail] = useState(user?.email || "")
    const [nameFirst, setNameFirst] = useState(user?.nameFirst || "")
    const [nameLast, setNameLast] = useState("")
    const [university, setUniversity] = useState("")
    const [country, setCountry] = useState("")

    const userInfoObject = [
        { label: "First Name", value: nameFirst, updateValue: setNameFirst, helperText: 'eg. Pekka' },
        { label: "Last Name", value: nameLast, updateValue: setNameLast, helperText: 'eg. Kaljanen' },
        { label: "Email", value: email, updateValue: setEmail, helperText: 'eg. pekka.kaljanen@poro.com' },
        { label: "University", value: university, updateValue: setUniversity, helperText: 'eg. University of Poro' },
        { label: "Country", value: country, updateValue: setCountry, helperText: 'eg. Porola' },
    ]

    const updateUserInfo = async () => {
        const { data } = await registerParticipantMutation({ variables: { email, nameFirst, nameLast, university, country } })
        console.log(data)
    }

    return (
        <Container maxWidth="sm">
            <Box my={3} align="center">
                <Typography variant="h5" component="h1" style={{ marginBottom: '20px' }} gutterBottom>Register me for the conference</Typography>
                {userInfoObject.map(infoField => (
                    <div key={infoField.label}>
                        <TextField required size="small" id={infoField.label} helperText={infoField.helperText} value={infoField.value} variant="outlined" label={infoField.label} onChange={e => infoField.updateValue(e.target.value)} fullWidth style={{ marginBottom: '10px' }} />
                    </div>))}
                <Button color="inherit" onClick={updateUserInfo}>Submit</Button>

            </Box>

        </Container>
    )
}

