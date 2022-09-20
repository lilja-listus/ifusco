
import Container from "@mui/material/Container";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Logo from 'img/sielulintu.png';

const Footer: React.FC = (): JSX.Element => {
    return (
        <Paper sx={{
            bottom: 0,
            height: '100px',
            marginTop: 'calc(10% + 60px)',
            position: 'fixed',
            width: '100%',
        }} component="footer" square variant="outlined">
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "flex",
                        flexGrow: 1,
                        justifyContent: "center",
                        my: 1,
                    }}
                >
                    <div>
                        <Image priority src={Logo} width={35} height={30} alt="Logo" />
                    </div>

                </Box>
                <Typography variant="caption" color="initial" sx={{
                    display: "flex",
                    flexGrow: 1,
                    justifyContent: "center",
                    my: 1,
                }}>
                    Sugri ry, UTU
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexGrow: 1,
                        justifyContent: "center",
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
};

export default Footer;
