import { TextField, Box, Typography, Button, Container, FormControl } from "@material-ui/core"
import { useAuth } from "../lib/useAuth"
import React, { useState } from 'react'
import { useRegisterParticipantMutation } from "../lib/graphql/registerparticipant.graphql"
import CountriesAutoComplete from "../components/CountriesAutoComplete"
import { useRouter } from 'next/router';

export default function RegisterNewParticipant() {
    const { user } = useAuth()
    const [registerParticipantMutation] = useRegisterParticipantMutation()


    const [email, setEmail] = useState(user?.email || "")
    const [nameFirst, setNameFirst] = useState(user?.nameFirst || "")
    const [nameLast, setNameLast] = useState("")
    const [university, setUniversity] = useState("")
    const [country, setCountry] = useState("")
    const [error, setErrorMessage] = useState("")

    const router = useRouter()

    const updateUserInfo = async (event) => {
        if (!email || !nameFirst || !nameLast || !university || !country) {
            setErrorMessage('Please fill in all the required fields')
        } else if (!email.includes('@')) {
            setErrorMessage('Please provide valid email')
        } else {

            try {
                const { data } = await registerParticipantMutation({ variables: { email, nameFirst, nameLast, university, country } })

                if (data.registerParticipant._id) {
                    router.push('/my-cabinet')

                }

            } catch (e) {
                setErrorMessage(e.message)
            }
        }

    }


    return (
        <Container align="center" style={{ marginTop: '100px' }}>
            <Box my={5} >
                <FormControl onSubmit={updateUserInfo} style={{ width: '50%' }}>
                    <Typography variant="h4" component="h1" style={{ marginBottom: '20px' }} gutterBottom>Register me for the conference</Typography>
                    <Box my={4} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', marginTop: '30px' }} >
                        <TextField label="First Name" size="small" value={nameFirst} helperText='eg. Pekka' onChange={e => setNameFirst(e.target.value)} required style={{ width: '300px' }} />
                        <TextField label="Last Name" size="small" value={nameLast} helperText='eg. Kaljanen' onChange={e => setNameLast(e.target.value)} required style={{ width: '300px' }} />
                    </Box>

                    <Box my={4} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
                        <TextField label="Email" size="small" type="email" value={email} helperText='eg. pekka.kaljanen@poro.com' onChange={e => setEmail(e.target.value)} required style={{ width: '300px' }} />
                        <TextField label="University" size="small" value={university} helperText='University of Poro' onChange={e => setUniversity(e.target.value)} required style={{ width: '300px' }} />
                    </Box>

                    <CountriesAutoComplete updateValue={setCountry} />
                    <Button type="submit" color="inherit" onClick={updateUserInfo} style={{ marginTop: '30px', marginBottom: '30px' }}>Submit</Button>
                    {error && <Typography variant="h6" component="h1" style={{ color: 'red' }}>{error}</Typography>}
                </FormControl>
            </Box>

        </Container>
    )
}
