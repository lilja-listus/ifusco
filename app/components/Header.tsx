import styles from '../styles/Home.module.scss';
import React from 'react';
import {
    AppBar,
    Button,
    Grid,
    Link as LinkText,
    Toolbar,
    Typography,
} from '@material-ui/core';
import Link from 'next/link';
import { Switch } from '@mui/material';
import HamburgerMenu from './HamburgerMenu';
import { INavigationLinks } from '../../interfaces/INavigationLinks';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Links } from './Links';

interface IProps {
    darkState: boolean;
    handleThemeChange: () => void;
}

const navigationLinks: INavigationLinks[] = [
    { href: '/navigation/registration', label: 'About Registration' },
    // { label: 'Abstracts', href: '/navigation/abstracts' },
    // { label: 'Programme', href: '/navigation/programme' },
    { href: '/navigation/about-turku', label: 'About Turku' },
    { href: '/navigation/accomodation', label: 'Accomodation' },
    { href: '/navigation/contact', label: 'Contact' },
    { href: '/navigation/resources', label: 'Resources' },
];

const Header: React.FC<IProps> = ({ darkState, handleThemeChange }): JSX.Element => {
    const isDesktopView: boolean = useMediaQuery('(min-width:600px)');

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
        </div >
    );
};

export default Header;
