import { useState } from "react";
import { useRouter } from 'next/router';
import { useAddAbstractMutation } from 'lib/graphql/addabstract.graphql'
import { Container, TextField, Box, Button } from '@material-ui/core'

export default function CreateAbstract() {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [language, setLanguage] = useState('')

    const router = useRouter()

    const [addAbstractMutation] = useAddAbstractMutation()

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addAbstractMutation({ variables: { input: { title, text, language } } })

            if (data.addAbstract._id) {
                router.push('/my-cabinet')
            }

        } catch (err) { console.log(err) }
    }

    return (
        <Container >
            <Box style={{ height: '500px' }}>
                <form onSubmit={onSubmit} >
                    <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <TextField variant="outlined" multiline autoFocus label="title" value={title} onChange={(e) => setTitle(e.target.value)} required size="small" style={{
                            width: '70%'
                        }} />
                        <TextField variant="outlined" label="language" value={language} onChange={(e) => setLanguage(e.target.value)} required size="small" />

                    </Box>
                    <TextField
                        id="filled-multiline-flexible"
                        label="Your text"
                        multiline
                        rows={10}
                        defaultValue="Default Value"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
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
    )
}