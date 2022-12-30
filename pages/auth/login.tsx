import React, { FormEvent, useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@material-ui/core';
import { useAuth } from 'lib/useAuth';
import styles from '../../styles/Home.module.scss';
import { useTranslation } from 'react-i18next';

export default function SignIn(): JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, signIn } = useAuth();

    const { t } = useTranslation();

    const onSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        signIn(email, password);
    };

    return (
        <Container maxWidth="sm" className={styles.loginPage} >
            <Typography variant="h6">{t("LOGIN")}</Typography>
            <Box component="div" >
                <form onSubmit={(e: FormEvent<HTMLFormElement>): Promise<void> => onSubmit(e)}>{error && <p>{error}</p>}
                    <TextField value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => (setEmail(e.target.value))} label={t("EMAIL")} required />
                </form>
            </Box>
            <Box >
                <form onSubmit={(e: FormEvent<HTMLFormElement>): Promise<void> => onSubmit(e)}>{error && <p>{error}</p>}
                    <Box pb={2.5} />
                    <TextField value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => (setPassword(e.target.value))} label={t("PASSWORD")} required type="password" />
                    <Box pb={2.5} />
                    <Button variant="contained" color="primary" size='large' type='submit' className={styles.loginPage__button}>{t("LOGIN")}</Button>
                </form>
            </Box>
        </Container>
    );
}
