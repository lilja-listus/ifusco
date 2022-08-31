import { Container, Box, Checkbox, Button, CircularProgress } from "@material-ui/core"
import { useAuth } from "lib/useAuth";

export default function MySchedule() {
    const { user } = useAuth();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (<Container >
        {user ? <Box my={5} >
            <div style={{ display: 'flex' }}>
                <Checkbox {...label} color="secondary" checked={user.isParticipant} disabled />
                <p>Register to the conference by July 5, 2023</p>
            </div>
            {!user.isParticipant && <Button href='/register-new-participant' color="inherit">Go to registration</Button>}
            <div style={{ display: 'flex' }}>
                <Checkbox {...label} color="secondary" disabled />
                <p>Submit abstract by July 10, 2023 (only for registered to the conference)</p>
            </div>
            <div style={{ display: 'flex' }}>
                <Checkbox {...label} color="secondary" disabled />
                <p>Come to Turku for May 15-18</p>
            </div>
        </Box> : <CircularProgress />
        } </Container >)
}

