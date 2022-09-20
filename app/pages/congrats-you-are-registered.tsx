import { Box, CircularProgress, Container, Typography } from "@material-ui/core";
import { useAuth } from "lib/useAuth";

export default function CongratsYouAreRegistered() {
    const { user } = useAuth();

    console.log(user);
    return (<Container >
        {user ?
            <Box my={5} >
                <Typography variant="body1" component="p">{`Congrats ${user.nameFirst}, you are registered for the conference. `}</Typography>
            </Box> : <CircularProgress />
        } </Container >);
}

