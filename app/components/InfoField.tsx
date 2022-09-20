import { Typography } from "@material-ui/core";

export default function InfoField({ label, value }) {
    return (
        <>
            <Typography variant="h4" component="h6" gutterBottom>{label}</Typography>
            <Typography variant="h6" component="h6" gutterBottom>{value}</Typography>
        </>
    );
}

