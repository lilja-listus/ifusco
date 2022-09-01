import { Container, Box, Checkbox, Button, CircularProgress, FormControlLabel, makeStyles } from "@material-ui/core"
import { useAuth } from "lib/useAuth";
import { IScheduleCheckboxes } from '../../interfaces/IScheduleCheckboxes'

export default function MySchedule() {
    const { user } = useAuth();

    const classes = useStyles();

    const mySchedulecheckboxes: IScheduleCheckboxes[] = [
        {
            checkbox: <Checkbox inputProps={{ 'aria-label': 'Register to conference' }} color="secondary" checked={user?.isParticipant} />,
            label: "Register to the conference by July 5, 2023",
            button: (!user.isParticipant && <Button href='/register-new-participant' color="inherit">Go to registration</Button>)
        },
        {
            checkbox: <Checkbox inputProps={{ 'aria-label': 'Submit abstract' }} color="secondary" />,
            label: "Submit abstract by July 10, 2023 (only for registered to the conference)"
        },
        {
            checkbox: <Checkbox inputProps={{ 'aria-label': 'Come to Turku' }} color="secondary" />,
            label: "Come to Turku for May 15-18"
        },
    ]

    return (
        <Container >
            {user ?
                <Box my={5} >
                    <div className={classes.boxesContainer} >
                        {mySchedulecheckboxes.map(({ checkbox, label, button }) =>
                            <>
                                <FormControlLabel control={checkbox} label={label} />
                                {button}
                            </>
                        )}
                    </div>
                </Box> : <CircularProgress />
            }
        </Container >
    )
}

const useStyles = makeStyles(() => ({
    boxesContainer: { display: 'flex', flexDirection: "column" }
})) 