import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Link as LinkText,
    Switch,
} from '@material-ui/core';
import Link from 'next/link';
import { useAuth } from 'lib/useAuth';

export default function Header({ darkState, handleThemeChange }) {
    const classes = useStyles();
    const { user } = useAuth();

    const links = [
        !user && { label: 'Sign Up', href: '/auth/signup' },
        !user && { label: 'Sign In', href: '/auth/signin' },
        user && { label: 'MyCabinet', href: '/my-cabinet' },
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
        { label: 'About Registration', href: '/registration' },
        // { label: 'Abstracts', href: '/abstracts' },
        // { label: 'Programme', href: '/programme' },
        { label: 'About Turku', href: '/about-turku' },
        { label: 'Accomodation', href: '/accomodation' },
        { label: 'Contact', href: '/contact' },
        { label: 'FAQ', href: '/faq' },
    ].map(({ label, href }) => {
        return (
            <Link href={href} key={href}>
                <Button color="inherit">{label}</Button>
            </Link>
        );
    });

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link href="/">
                            <LinkText href="" color="inherit">
                                IFUSCO 2023, Turku, Finland
                            </LinkText>
                        </Link>
                    </Typography>
                    <Switch checked={darkState} onChange={handleThemeChange} />
                    {links}
                </Toolbar>

                <Typography variant="h7" className={classes.title} style={{ margin: "0px auto" }}>
                    {navigationLinks}
                </Typography>

            </AppBar>
        </div>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    list: {
        width: 250,
    },
}));