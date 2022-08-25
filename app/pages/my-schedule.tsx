import { Container, Box, Checkbox, Button, } from "@material-ui/core"
import { useAuth } from "lib/useAuth";

export default function MySchedule() {
    const { user } = useAuth();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (<Container >
        <Box my={5} >
            <div style={{ display: 'flex' }}>
                <Checkbox {...label} color="secondary" disabled />
                <p>Register to the conference by July 5, 2023</p>
            </div>
            <Button>Register to the conference</Button>
            <div style={{ display: 'flex' }}>
                <Checkbox {...label} color="secondary" disabled />
                <p>Submit abstract by July 10, 2023 (only for registered to the conference)</p>
            </div>
            <div style={{ display: 'flex' }}>
                <Checkbox {...label} color="secondary" disabled />
                <p>Come to Turku for May 15-18</p>
            </div>
        </Box> </Container >)
}

