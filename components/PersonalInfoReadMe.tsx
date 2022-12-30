import { Typography } from "@material-ui/core";
import React from 'react';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import { IUser } from "../interfaces/IUser";
import { useTranslation } from 'react-i18next';

interface IProps {
    readonly user: IUser;
    readonly setReadme: (value: boolean) => void
}

interface IInfo {
    readonly label: string;
    readonly value: string;
}

const PersonalInfoReadMe: React.FC<IProps> = ({ user, setReadme }): JSX.Element => {
    const { t } = useTranslation();

    const userInfoObject: IInfo[] = [
        { label: t("FIRST_NAME"), value: user.nameFirst },
        { label: t("EMAIL"), value: user.email },
    ];

    return (
        <>
            <Typography variant="h5" component="h1" gutterBottom>{t("USER_INFO")}</Typography>
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
