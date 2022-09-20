import { Box, CircularProgress, Container, Typography } from "@material-ui/core";
import { useAuth } from "lib/useAuth";

const CongratsYouAreRegistered: React.FC = (): JSX.Element => {
    const { user } = useAuth();

    return (<Container >
        {user ?
            <Box my={5} >
                <Typography variant="body1" component="p">{`Congrats ${user.nameFirst}, you are registered for the conference. `}</Typography>
            </Box> : <CircularProgress />
        } </Container >);
};

export default CongratsYouAreRegistered;
