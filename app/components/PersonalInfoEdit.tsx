import { TextField, Box, Typography, Button } from "@material-ui/core"
import { useAuth } from "../lib/useAuth"
import React, { useState } from 'react'

export default function PersonalInfoEdit({ user, setReadme }) {


    const { editUser } = useAuth()

    const [nameFirst, setNameFirst] = useState(user.nameFirst || "")
    const [nameLast, setNameLast] = useState(user.nameLast || "")
    const [university, setUniversity] = useState(user.university || "")
    const [country, setCountry] = useState(user.country || "")

    const userInfoObject = [
        { label: "First Name", value: nameFirst, updateValue: setNameFirst },
        { label: "Last Name", value: nameLast, updateValue: setNameLast },
        { label: "University", value: university, updateValue: setUniversity },
        { label: "Country", value: country, updateValue: setCountry },
    ]

    const updateUserInfo = async () => {
        await editUser(nameFirst, nameLast, university, country)
        setReadme(true)
    }

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
    )
}

