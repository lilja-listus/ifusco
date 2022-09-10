import styles from '../styles/Home.module.scss'
import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Link as LinkText,
} from '@material-ui/core';
import Link from 'next/link';
import { useAuth } from 'lib/useAuth';
import { Switch } from '@mui/material';


export default function Header({ darkState, handleThemeChange }) {
    const { user } = useAuth();

    const links = [
        !user && { label: 'Sign Up', href: '/auth/signup' },
        !user && { label: 'Sign In', href: '/auth/signin' },
        user && { label: 'My Dashboard', href: '/my-dashboard' },
        user && { label: 'Sign Out', href: '/auth/signout' },
    ]
        .filter((link) => link)
        .map(({ label, href }) => {
            return (
                <Link href={href} key={href}>
                    <Button color="inherit">{label}</Button>
                </Link>
            );
        });

    const navigationLinks = [
        { label: 'About Registration', href: '/navigation/registration' },
        // { label: 'Abstracts', href: '/navigation/abstracts' },
        // { label: 'Programme', href: '/navigation/programme' },
        { label: 'About Turku', href: '/navigation/about-turku' },
        { label: 'Accomodation', href: '/navigation/accomodation' },
        { label: 'Contact', href: '/navigation/contact' },
        { label: 'FAQ', href: '/navigation/faq' },
    ].map(({ label, href }) => {
        return (
            <Link href={href} key={href}>
                <Button color="inherit">{label}</Button>
            </Link>
        );
    });

    return (
        <div className={styles.headerContainer}>
            <AppBar position="static">
                <Toolbar className={styles.headerContainer__toolbar} >
                    <Typography variant="h5" component="h5">
                        <Link href="/">
                            <LinkText href="" color="inherit">
                                IFUSCO XXXVIII
                            </LinkText>
                        </Link>
                    </Typography>
                    <div>
                        <Switch checked={darkState} onChange={handleThemeChange} />
                        {links}
                    </div>

                </Toolbar>

                <Typography variant="h5" className={styles.headerContainer__navigationLinks}>
                    {navigationLinks}
                </Typography>

            </AppBar>
        </div >
    );
}

