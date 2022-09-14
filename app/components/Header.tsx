import styles from '../styles/Home.module.scss'
import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Link as LinkText,
    Grid,
} from '@material-ui/core';
import Link from 'next/link';
import { useAuth } from 'lib/useAuth';
import { Switch } from '@mui/material';
import HamburgerMenu from './HamburgerMenu';
import { INavigationLinks } from '../../interfaces/INavigationLinks'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Links } from './links'


export default function Header({ darkState, handleThemeChange }) {
    const { user } = useAuth();

    const isDesktopView = useMediaQuery('(min-width:600px)');



    const navigationLinks: INavigationLinks[] = [
        { label: 'About Registration', href: '/navigation/registration' },
        // { label: 'Abstracts', href: '/navigation/abstracts' },
        // { label: 'Programme', href: '/navigation/programme' },
        { label: 'About Turku', href: '/navigation/about-turku' },
        { label: 'Accomodation', href: '/navigation/accomodation' },
        { label: 'Contact', href: '/navigation/contact' },
        { label: 'FAQ', href: '/navigation/faq' },
    ]

    return (
        <div className={styles.headerContainer}>
            <AppBar position="static">
                <Toolbar >
                    <Grid
                        justifyContent="space-between"
                        container
                        className={styles.headerContainer__toolbar}
                    >
                        <Grid item>
                            <Typography variant="h5" component="h5">
                                <Link href="/">
                                    <LinkText href="" color="inherit">
                                        IFUSCO XXXVIII
                                    </LinkText>
                                </Link>

                            </Typography>

                        </Grid>


                        {isDesktopView ? <> <Grid item>
                            {navigationLinks.map(({ label, href }) => {
                                return (
                                    <Link href={href} key={href}>
                                        <Button color="inherit">{label}</Button>
                                    </Link>
                                );

                            })}
                        </Grid>
                            <Grid item align="right" >
                                <Switch checked={darkState} onChange={handleThemeChange} />
                                <Links />
                            </Grid>
                        </>
                            : <Grid item>
                                <HamburgerMenu navigationLinks={navigationLinks} />
                            </Grid>

                        }


                    </Grid>



                </Toolbar>

            </AppBar>
        </div >);

}

