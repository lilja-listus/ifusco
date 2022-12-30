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
import { INavigationLinks } from '../interfaces/INavigationLinks';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ILink } from '../interfaces/ILink';
import { useAuth } from '../lib/useAuth';
import { useTranslation } from 'react-i18next';
import LanguageSwitch from './LanguageSwitch';

interface IProps {
    darkState: boolean;
    handleThemeChange: () => void;
}


const Header: React.FC<IProps> = ({ darkState, handleThemeChange }): JSX.Element => {
    const isDesktopView: boolean = useMediaQuery('(min-width:600px)');

    const { user } = useAuth();
    const { t } = useTranslation();

    const links: ILink[] = [
        !user && { href: '/auth/signup', label: t("SIGN_UP") },
        !user && { href: '/auth/login', label: t("LOG_IN") },
        user && { href: '/my-dashboard', label: t("MY_DASHBOARD") },
        user && { href: '/auth/signout', label: t("SIGN_OUT") },
    ].filter((link) => link);

    const navigationLinks: INavigationLinks[] = [
        { href: '/navigation/registration', label: t("REGISTRATION") },
        // { label: 'Abstracts', href: '/navigation/abstracts' },
        // { label: 'Programme', href: '/navigation/programme' },
        { href: '/navigation/about-turku', label: t("ABOUT_TURKU") },
        { href: '/navigation/accommodation', label: t("ACCOMMODATION") },
        { href: '/navigation/contact', label: t("CONTACT") },
        { href: '/navigation/resources', label: t("RESOURCES") },
    ];


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
                                        {t("IFUSCO_NAME")}
                                    </LinkText>
                                </Link>
                            </Typography>

                        </Grid>
                        {isDesktopView ? <>
                            <Grid item>
                                {navigationLinks.map(({ label, href }) => {
                                    return (
                                        <Link href={href} key={href} >
                                            <Button color="inherit">{label}</Button>
                                        </Link>
                                    );

                                })}
                            </Grid>

                            <Grid item>
                                <Switch checked={darkState} onChange={handleThemeChange} />
                                {links.map(({ label, href }) => (
                                    <Link href={href} key={href}>
                                        <Button color="inherit">{label}</Button>
                                    </Link>
                                ))}
                            </Grid>
                            <LanguageSwitch />
                        </>
                            : <Grid item>
                                <HamburgerMenu navigationLinks={navigationLinks} />
                                <LanguageSwitch />
                            </Grid>

                        }
                    </Grid>
                </Toolbar>

            </AppBar>
        </div >
    );
};

export default Header;

