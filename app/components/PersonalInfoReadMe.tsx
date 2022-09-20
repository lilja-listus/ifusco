import { Typography } from "@material-ui/core";
import React from 'react';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import { IUser } from "../../interfaces/IUser";

interface IProps {
    readonly user: IUser;
    readonly setReadme: (value: boolean) => void
}

interface IInfo {
    readonly label: string;
    readonly value: string;
}

const PersonalInfoReadMe: React.FC<IProps> = ({ user, setReadme }): JSX.Element => {

    const userInfoObject: IInfo[] = [
        { label: "First Name", value: user.nameFirst },
        { label: "Email", value: user.email },
    ];

    return (
        <>
            <Typography variant="h5" component="h1" gutterBottom>User Info</Typography>
            {user && userInfoObject.map(infoField => (
                <Typography variant={'body2'} component={'p'} key={infoField.label} gutterBottom>{`${infoField.label}: ${infoField.value || 'N/A'}`}</Typography>
            ))
            }
            <Fab color="secondary" aria-label="edit" onClick={(): void => setReadme(false)}>
                <EditIcon />
            </Fab>

        </>
    );
};

export default PersonalInfoReadMe;
