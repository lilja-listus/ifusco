import { Typography, TextField } from "@material-ui/core"
import React from 'react'


export default function AbstractReadOnly({ abstract }) {

    return (
        <>
            <Typography variant="h5" component="h1" gutterBottom>{`${abstract.title} (${abstract.language})`}</Typography>

            <TextField
                id="filled-multiline-flexible"
                label="Your text"
                multiline
                rows={10}
                defaultValue="Default Value"
                value={abstract.text}
                fullWidth
                size="medium"
                variant="outlined"
                margin="normal"
                disabled
            />
        </>
    )
}

