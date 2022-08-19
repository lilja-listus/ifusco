import { useState } from 'react'
import { Typography, Container, TextField, Box, Button } from '@material-ui/core'
import { useAuth } from 'lib/useAuth'

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { error, signIn } = useAuth()

    const onSubmit = async (event) => {
        event.preventDefault();
        signIn(email, password)
    }

    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <form onSubmit={onSubmit}>{error && <p>{error}</p>}
                    <Typography variant="h4">SignIn</Typography>
                    <Box pb={2.5} />
                    <TextField value={email} onChange={(e) => setEmail(e.target.value)} label="Email" required />


                </form>
            </Box>
            <Box my={4}>
                <form onSubmit={onSubmit}>{error && <p>{error}</p>}
                    <Typography variant="h4">Password</Typography>
                    <Box pb={2.5} />
                    <TextField value={password} onChange={(e) => setPassword(e.target.value)} label="Password" required type="password" />
                    <Box pb={2.5} />
                    <Button variant="contained" color="primary" size='large' type='submit'>SignIn</Button>
                </form>
            </Box>
        </Container>
    )
}