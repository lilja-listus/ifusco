import styles from '../styles/Home.module.scss'

import { Box, Drawer, Link, ListItemIcon } from '@material-ui/core'
import { ListItemButton } from '@mui/material'
import React, { useState } from 'react'
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { INavigationLinks } from '../../interfaces/INavigationLinks'
import { Links } from './links'


interface IProps {
    navigationLinks: INavigationLinks[]
}

const HamburgerMenu: React.FC<IProps> = ({ navigationLinks }) => {

    const [open, setState] = useState(false);

    //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
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
                    mr: 2,
                    display: {
                        xs: "block",
                        sm: "none"
                    }
                }}
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <Box
                    sx={{
                        p: 2,
                        height: 1,
                    }}
                >
                    <IconButton sx={{ mb: 2 }} onClick={toggleDrawer(false)} edge="end"
                    >
                        <CloseIcon />
                    </IconButton>

                    <Box sx={{ mb: 2 }} component="div" className={styles.hamburgerMenuContainer__navigationLinks}>
                        {navigationLinks.map
                            (({ label, href }) => (
                                <ListItemButton key={label} className={styles.hamburgerMenuContainer__navigationLink}>
                                    <Link href={href} key={href}>
                                        <ListItemText primary={label} />
                                    </Link>
                                </ListItemButton>

                            )
                            )}

                        <Divider />
                        <Links />
                    </Box>



                </Box>
            </Drawer>
        </div>
    )
}

export default HamburgerMenu
