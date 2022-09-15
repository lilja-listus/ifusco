import { Container, Typography, Box, Button } from "@material-ui/core"
import Link from 'next/link'
import styles from '../../styles/Home.module.scss'

export default function About() {
    return (
        <Container maxWidth="md" className={styles.pageContainer}>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>Next.js example</Typography>
                <Link href="/">
                    <Button variant="contained" color="primary">Go to index page</Button>
                </Link>
            </Box>
        </Container >)
}

