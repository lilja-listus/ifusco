import React, { FormEvent, useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@material-ui/core';
import { useAuth } from 'lib/useAuth';
import styles from '../../styles/Home.module.scss';

export default function SignIn(): JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, signIn } = useAuth();

    const onSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        signIn(email, password);
    };

    return (
        <Container maxWidth="sm" className={styles.loginPage} >
            <Typography variant="h6">Login</Typography>
            <Box component="div" >
                <form onSubmit={(e: FormEvent<HTMLFormElement>): Promise<void> => onSubmit(e)}>{error && <p>{error}</p>}
                    <TextField value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => (setEmail(e.target.value))} label="email" required />
                </form>
            </Box>
            <Box >
                <form onSubmit={(e: FormEvent<HTMLFormElement>): Promise<void> => onSubmit(e)}>{error && <p>{error}</p>}
                    <Box pb={2.5} />
                    <TextField value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => (setPassword(e.target.value))} label="Password" required type="password" />
                    <Box pb={2.5} />
                    <Button variant="contained" color="primary" size='large' type='submit' className={styles.loginPage__button}>Login</Button>
                </form>
            </Box>
        </Container>
    );
}
