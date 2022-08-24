import { Typography } from "@material-ui/core"
import React from 'react'
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

export default function PersonalInfoReadMe({ user, setReadme }) {
    const userInfoObject = [
        { label: "First Name", value: user.nameFirst },
        { label: "Last Name", value: user.nameLast },
        { label: "Email", value: user.email },
        { label: "University", value: user.university },
        { label: "Country", value: user.country },
    ]

    return (
        <>
            <Typography variant="h5" component="h1" gutterBottom>About Me</Typography>
            {user && userInfoObject.map(infoField => (
                <Typography variant={'body2'} component={'p'} key={infoField.label} gutterBottom>{`${infoField.label}: ${infoField.value || 'N/A'}`}</Typography>
            ))
            }
            <Fab color="secondary" aria-label="edit" onClick={() => setReadme(false)}>
                <EditIcon />
            </Fab>

        </>
    )
}

