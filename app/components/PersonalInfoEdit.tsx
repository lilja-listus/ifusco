import { Box, Button, TextField, Typography } from "@material-ui/core";
import { useAuth } from "../lib/useAuth";
import React, { useState } from 'react';

export default function PersonalInfoEdit({ user, setReadme }) {


    const { editUser } = useAuth();

    const [nameFirst, setNameFirst] = useState(user.nameFirst || "");


    const userInfoObject = [
        { label: "First Name", value: nameFirst, updateValue: setNameFirst },

    ];

    const updateUserInfo = async () => {
        await editUser(nameFirst);
        setReadme(true);
    };

    return (
        <>
            <Box my={4}>
                <Typography variant="h5" component="h1" gutterBottom>Edit About Me</Typography>
                {userInfoObject.map(infoField => (
                    <div key={infoField.label}>
                        <TextField size="small" id={infoField.label} value={infoField.value} variant="filled" helperText={infoField.label} onChange={e => infoField.updateValue(e.target.value)} />
                    </div>))}
            </Box>

            <Button color="inherit" onClick={updateUserInfo}>Save</Button>
        </>
    );
}

