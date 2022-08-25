import { useState } from 'react'
import { Typography, Container, TextField, Box, Button } from '@material-ui/core'
import { useAuth } from 'lib/useAuth'

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [nameFirst, setNameFirst] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const { error, signUp } = useAuth()

    const onSubmit = async (event) => {
        event.preventDefault();
        if (passwordConfirm !== password) {
            setErrorMessage('Passwords do not match')
        } else if (!email.includes('@')) {
            setErrorMessage('Please enter valid email')
        } else if (!email || !password || !nameFirst) {
            setErrorMessage('Please fill in all fields')
        } else {
            signUp(email, password, nameFirst)
        }
    }

    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <form onSubmit={onSubmit}>{error && <p>{error}</p>}
                    <Typography variant="h5">SignUp</Typography>
                    <Box pb={2.5} />
                    <TextField value={email} onChange={(e) => setEmail(e.target.value)} label="Email" required />


                </form>
            </Box>
            <Box my={4}>
                <form onSubmit={onSubmit}>{error && <p>{error}</p>}
                    <Typography variant="h5">First Name</Typography>
                    <Box pb={2.5} />
                    <TextField value={nameFirst} onChange={(e) => setNameFirst(e.target.value)} label="nameFirst" required />

                </form>
            </Box>
            <Box my={4}>
                <form onSubmit={onSubmit}>{error && <p>{error}</p>}
                    <Typography variant="h5">Password</Typography>
                    <Box pb={2.5} />
                    <TextField value={password} onChange={(e) => setPassword(e.target.value)} label="Password" type="password" required />
                    <Box pb={2.5} />
                    <Typography variant="h5">Confirm Password</Typography>
                    <Box pb={2.5} />
                    <TextField value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} label="PasswordConfirm" type="password" required />
                    <Box pb={2.5} />
                    <Button variant="contained" color="primary" size='large' type='submit'>SignUp</Button>
                </form>
            </Box>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </Container>
    )
}