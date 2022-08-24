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
        { label: "Email", value: email, updateValue: setEmail },
        { label: "First Name", value: nameFirst, updateValue: setNameFirst },
        { label: "Last Name", value: nameLast, updateValue: setNameLast },
        { label: "University", value: university, updateValue: setUniversity },
        { label: "Country", value: country, updateValue: setCountry },
    ]

    const updateUserInfo = async () => {
        const { data } = await registerParticipantMutation({ variables: { email, nameFirst, nameLast, university, country } })
        console.log(data)
    }

    return (
        <Container>
            <Box my={4}>
                <Typography variant="h5" component="h1" gutterBottom>Register me for the conference</Typography>
                {userInfoObject.map(infoField => (
                    <div key={infoField.label}>
                        <TextField required size="small" id={infoField.label} value={infoField.value} variant="filled" helperText={infoField.label} onChange={e => infoField.updateValue(e.target.value)} />
                    </div>))}
            </Box>

            <Button color="inherit" onClick={updateUserInfo}>Submit</Button>
        </Container>
    )
}

