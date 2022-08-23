import { Container, Typography, Box } from "@material-ui/core"
import Link from 'next/link'

export default function InfoField({ label, value }) {
    return (
        <>
            <Typography variant="h4" component="h6" gutterBottom>{label}</Typography>
            <Typography variant="h6" component="h6" gutterBottom>{value}</Typography>
        </>
    )
}

