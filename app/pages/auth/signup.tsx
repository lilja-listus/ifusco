import { useState } from 'react'
import { Typography, Container, TextField, Box, Button } from '@material-ui/core'
import { useAuth } from 'lib/useAuth'

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nameFirst, setNameFirst] = useState('')
    const { error, signUp } = useAuth()

    const onSubmit = async (event) => {
        event.preventDefault();
        signUp(email, password, nameFirst)
    }

    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <form onSubmit={onSubmit}>{error && <p>{error}</p>}
                    <Typography variant="h4">SignUp</Typography>
                    <Box pb={2.5} />
                    <TextField value={email} onChange={(e) => setEmail(e.target.value)} label="Email" required />


                </form>
            </Box>
            <Box my={4}>
                <form onSubmit={onSubmit}>{error && <p>{error}</p>}
                    <Typography variant="h4">First Name</Typography>
                    <Box pb={2.5} />
                    <TextField value={nameFirst} onChange={(e) => setNameFirst(e.target.value)} label="nameFirst" required />

                </form>
            </Box>
            <Box my={4}>
                <form onSubmit={onSubmit}>{error && <p>{error}</p>}
                    <Typography variant="h4">Password</Typography>
                    <Box pb={2.5} />
                    <TextField value={password} onChange={(e) => setPassword(e.target.value)} label="Password" type="password" required />
                    <Box pb={2.5} />
                    <Button variant="contained" color="primary" size='large' type='submit'>SignUp</Button>
                </form>
            </Box>
        </Container>
    )
}