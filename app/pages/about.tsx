import { Container, Typography, Box, Button } from "@material-ui/core"
import Link from 'next/link'

export default function About() { return (<Container maxWidth="sm"> <Box my={4}><Typography variant="h4" component="h1" gutterBottom>Next.js example</Typography><Link href="/"><Button variant="contained" color="primary">Go to index page</Button></Link> </Box> </Container >) }

