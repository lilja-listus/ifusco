import { TextField, Typography } from "@material-ui/core";
import React from 'react';
import { IAbstract } from '../../interfaces/IAbstract';

const AbstractReadOnly: React.FC<IAbstract> = (abstract): JSX.Element => {
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
    );
};

export default AbstractReadOnly;
