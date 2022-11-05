import styles from '../styles/Home.module.scss';
import { Box, Button, Checkbox, CircularProgress, Container, FormControlLabel } from "@material-ui/core";
import { useAuth } from "lib/useAuth";
import { IScheduleCheckboxes } from '../interfaces/IScheduleCheckboxes';

const MySchedule: React.FC = (): JSX.Element => {
    const { user } = useAuth();

    const mySchedulecheckboxes: IScheduleCheckboxes[] = [
        {
            button: (!user?.isParticipant && <Button href='/register-new-participant' color="inherit">Go to registration</Button>),
            checkbox: <Checkbox inputProps={{ 'aria-label': 'Register to conference' }} color="secondary" checked={user?.isParticipant} />,
            label: "Register to the conference by July 5, 2023",
        },
        {
            checkbox: <Checkbox inputProps={{ 'aria-label': 'Submit abstract' }} color="secondary" />,
            label: "Submit abstract by July 10, 2023 (only for registered to the conference)",
        },
        {
            checkbox: <Checkbox inputProps={{ 'aria-label': 'Come to Turku' }} color="secondary" />,
            label: "Come to Turku for May 15-18",
        },
    ];

    return (
        <Container >
            {user ?
                <Box my={5} >
                    <div className={styles.boxesContainer} >
                        {mySchedulecheckboxes.map(({ checkbox, label, button }) =>
                            <div key={label}>
                                <FormControlLabel control={checkbox} label={label} />
                                {button}
                            </div>,
                        )}
                    </div>
                </Box> : <CircularProgress />
            }
        </Container >
    );
};

export default MySchedule;
