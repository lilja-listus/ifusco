import styles from '../styles/Home.module.scss';
import { Box, Drawer, Link } from '@material-ui/core';
import { ListItemButton } from '@mui/material';
import React, { useState } from 'react';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { INavigationLinks } from '../../interfaces/INavigationLinks';
import { Links } from './Links';

interface IProps {
    navigationLinks: INavigationLinks[]
}

const HamburgerMenu: React.FC<IProps> = ({ navigationLinks }): JSX.Element => {
    const [open, setState] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setState(open);
    };

    return (
        <div>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
                sx={{
                    display: {
                        sm: "none",
                        xs: "block",
                    },
                    mr: 2
                }}
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
            >
                <Box
                    sx={{
                        height: 1,
                        p: 2,
                    }}>
                    <IconButton sx={{ mb: 2 }} onClick={toggleDrawer(false)} edge="end">
                        <CloseIcon />
                    </IconButton>

                    <Box sx={{ mb: 2 }} component="div" className={styles.hamburgerMenuContainer__navigationLinks}>
                        {navigationLinks.map
                            (({ label, href }) => (
                                <ListItemButton key={label} className={styles.hamburgerMenuContainer__navigationLink}>
                                    <Link href={href} key={href}>
                                        <ListItemText primary={label} />
                                    </Link>
                                </ListItemButton>),
                            )}
                        <Divider />
                        <Links />
                    </Box>
                </Box>
            </Drawer>
        </div>
    );
};

export default HamburgerMenu;
