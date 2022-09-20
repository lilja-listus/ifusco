0;
import * as React from "react";
import Container from "@mui/material/Container";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Logo from 'img/sielulintu.png';

export default function Footer() {

    return (
        <Paper sx={{
            marginTop: 'calc(10% + 60px)',
            width: '100%',
            height: '100px',
            position: 'fixed',
            bottom: 0,
        }} component="footer" square variant="outlined">
            <Container maxWidth="lg">

                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        my: 1,
                    }}
                >
                    <div>
                        <Image priority src={Logo} width={35} height={30} alt="Logo" />
                    </div>

                </Box>
                <Typography variant="caption" color="initial" sx={{
                    flexGrow: 1,
                    justifyContent: "center",
                    display: "flex",
                    my: 1,
                }}>
                    Sugri ry, UTU
                </Typography>
                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        mb: 2,
                    }}
                >
                    <Typography variant="caption" color="initial">
                        Lilja Lisztusz, Copyright ©2023
                    </Typography>
                </Box>
            </Container>
        </Paper>
    );

}
