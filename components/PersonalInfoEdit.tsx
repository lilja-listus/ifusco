import { Box, Button, TextField, Typography } from "@material-ui/core";
import { useAuth } from "../lib/useAuth";
import React, { useState } from 'react';
import { IUser } from "../interfaces/IUser";
import { useTranslation } from 'react-i18next';

interface IUserInfo {
    readonly label: string;
    readonly value: string;
    readonly updateValue: (value: string) => void
}

interface IProps {
    readonly user: IUser;
    readonly setReadme: (value: boolean) => void
}

const PersonalInfoEdit: React.FC<IProps> = ({ user, setReadme }): JSX.Element => {
    const { editUser } = useAuth();
    const [nameFirst, setNameFirst] = useState(user.nameFirst || "");

    const { t } = useTranslation();

    const userInfoObject: IUserInfo[] = [
        { label: t("FIRST_NAME"), updateValue: setNameFirst, value: nameFirst },
    ];

    const updateUserInfo = async (): Promise<void> => {
        await editUser(nameFirst);
        setReadme(true);
    };

    return (
        <>
            <Box my={4}>
                <Typography variant="h5" component="h1" gutterBottom>{t("EDIT_MY_NAME")}</Typography>
                {userInfoObject.map(infoField => (
                    <div key={infoField.label}>
                        <TextField size="small" id={infoField.label} value={infoField.value} variant="filled" helperText={infoField.label} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => infoField.updateValue(e.target.value)} />
                    </div>))}
            </Box>

            <Button color="inherit" onClick={updateUserInfo}>{t("SAVE")}</Button>
        </>
    );
};

export default PersonalInfoEdit;
