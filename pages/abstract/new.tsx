import styles from '../../styles/Home.module.scss';
import { FormEvent, useState } from "react";
import { NextRouter, useRouter } from 'next/router';
import { useAddAbstractMutation } from 'lib/graphql/addabstract.graphql';
import { Box, Button, Container, TextField } from '@material-ui/core';

export default function CreateAbstract(): JSX.Element {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [language, setLanguage] = useState('');

    const router: NextRouter = useRouter();

    const [addAbstractMutation] = useAddAbstractMutation();


    const onSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        try {
            const { data } = await addAbstractMutation({ variables: { input: { language, text, title } } });

            if (data.addAbstract._id) {
                router.push('/my-dashboard');
            }

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Container >
            <Box className={styles.abstractContainer}>
                <form onSubmit={onSubmit} >
                    <Box className={styles.abstractContainer__formBox}>
                        <TextField variant="outlined" multiline autoFocus label="title" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setTitle(e.target.value)} required size="small" className={styles.abstractContainer__titleText} />
                        <TextField variant="outlined" label="language" value={language} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setLanguage(e.target.value)} required size="small" />
                    </Box>
                    <TextField
                        id="filled-multiline-flexible"
                        label="Your text"
                        multiline
                        rows={10}
                        defaultValue="Default Value"
                        value={text}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setText(e.target.value)}
                        fullWidth
                        size="medium"
                        variant="outlined"
                        margin="normal"
                        required
                    />
                    <Box >
                        <Button type="submit" size="small">Add abstract</Button>
                    </Box>
                </form>
            </Box>
        </Container >
    );
}
