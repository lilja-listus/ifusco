import { Box, Container, Link, Typography } from "@material-ui/core";
import styles from '../../styles/Home.module.scss';
import Sugri from '../../img/sugri-vaatteet.jpeg';
import Image from 'next/image';

export default function Contact(): JSX.Element {
    return (
        <Container maxWidth="md" className={styles.pageContainer} fixed>
            <Box my={4} >
                <Typography variant="h4" component="h1" gutterBottom>Contact</Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    Feel free to contact us via e-mail at [THE EMAIL]
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    Also make sure to follow us on Facebook
                    (<Link color="primary" href='https://www.facebook.com/ifusco2022' key='facebook-link' target="_blank" aria-label="To know more go to our facebook page">https://www.facebook.com/ifusco2022</Link>)
                    and vKontakte [THE LINK]!
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    The main organizers of IFUSCO XXXVIII are: turun Sugrit (<Link color="primary" href='https://www.facebook.com/ifusco2022' key='facebook-link' target="_blank" aria-label="To know more go to our page">https://turunsugrit.wordpress.com/</Link>)
                </Typography>
                <div
                    className={styles.indexPage__image}>
                    <Image priority src={Sugri} width={350} height={300} alt="Sugri" />
                </div>

            </Box>
        </Container >)
        ;
}

