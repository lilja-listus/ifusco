import styles from '../styles/Home.module.scss';
import { Box, Button, Checkbox, CircularProgress, Container, FormControlLabel } from "@material-ui/core";
import { useAuth } from "lib/useAuth";
import { IScheduleCheckboxes } from '../interfaces/IScheduleCheckboxes';
import { useTranslation } from 'react-i18next';

const MySchedule: React.FC = (): JSX.Element => {
    const { user } = useAuth();
    const { t } = useTranslation();

    const myScheduleCheckBoxes: IScheduleCheckboxes[] = [
        {
            button: (!user?.isParticipant && <Button href='/register-new-participant' color="inherit">{t("GO_TO_REGISTRATION")}</Button>),
            checkbox: <Checkbox disabled inputProps={{ 'aria-label': 'Register to conference' }} color="secondary" checked={user?.isParticipant} />,
            label: t("REGISTER_BY"),
        },
        {
            checkbox: <Checkbox disabled inputProps={{ 'aria-label': 'Submit abstract' }} color="secondary" />,
            label: t("SUBMIT_BY"),
        },
        {
            checkbox: <Checkbox disabled inputProps={{ 'aria-label': 'Come to Turku' }} color="secondary" />,
            label: t("ARRIVE_BY"),
        },
    ];

    return (
        <Container >
            {user ?
                <Box my={5} >
                    <div className={styles.boxesContainer} >
                        {myScheduleCheckBoxes.map(({ checkbox, label, button }) =>
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
