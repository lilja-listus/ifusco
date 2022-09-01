import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { countries } from './countries'
import { makeStyles } from '@material-ui/core';

interface IProps {
    readonly updateValue: (value: any) => void;
}

export const CountriesAutoComplete: React.FC<IProps> = ({ updateValue }) => {
    const classes = useStyles()

    return (
        <Autocomplete
            id="country-select"
            options={countries}
            getOptionLabel={(option) => option}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props} >
                    {option}
                </Box>
            )}
            onChange={(event: any, newValue: string | null) => {
                updateValue(newValue);
            }}
            renderInput={(params) => (
                <TextField
                    className={classes.textField}
                    id="country-select"
                    required size="small"
                    helperText="eg. Porola"
                    {...params}
                    label="Choose a country"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                    }}
                />
            )}
        />
    );
}

const useStyles = makeStyles(() => ({
    textField: {
        width: '300px'
    }
})) 