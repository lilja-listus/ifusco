import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { INews } from '../interfaces/INews';

const NewsCard: React.FC<INews> = ({ title, text, image }): JSX.Element => {
    return (
        <Card sx={{ marginBottom: '10px', marginTop: '10px', }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="grey">
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default NewsCard;

