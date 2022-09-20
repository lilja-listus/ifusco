import styles from '../styles/Home.module.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { countries } from './countries';

interface IProps {
    readonly updateValue: (value: any) => void;
}

export const CountriesAutoComplete: React.FC<IProps> = ({ updateValue }): JSX.Element => {

    return (
        <Autocomplete
            id="country-select"
            options={countries}
            getOptionLabel={(option): string => option}
            renderOption={(props, option): JSX.Element => (
                <Box component="li" sx={{ '& > img': { flexShrink: 0, mr: 2 } }} {...props} >
                    {option}
                </Box>
            )}
            onChange={(__event: unknown, newValue: string | null): void => {
                updateValue(newValue);
            }}
            renderInput={(params): JSX.Element => (
                <TextField
                    className={styles.textField}
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
};
