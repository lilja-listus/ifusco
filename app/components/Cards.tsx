/* eslint-disable @typescript-eslint/typedef */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { images } from './data/images';
import { IImage } from '../../interfaces/IImage';

const ResourcesButtons: React.FC = (): JSX.Element => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
            {images.map((image: IImage) => (
                <Link href={image.href} key={image.title} target="_blank">
                    <ImageButton
                        focusRipple

                        style={{
                            width: image.width,
                        }}
                    >
                        <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                        <ImageBackdrop className="MuiImageBackdrop-root" />
                        <Image>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                sx={{
                                    p: 4,
                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                    position: 'relative',
                                    pt: 2,
                                }}
                            >
                                {image.title}
                                <ImageMarked className="MuiImageMarked-root" />
                            </Typography>
                        </Image>
                    </ImageButton>
                </Link>
            ))
            }
        </Box >
    );
};

export default ResourcesButtons;

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    '&:hover, &.Mui-focusVisible': {
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
        zIndex: 1,
    },
    [theme.breakpoints.down('sm')]: {
        height: 100,
        width: '100% !important', // Overrides inline-style
    },
    height: 200,
    position: 'relative',

}));

const ImageSrc = styled('span')({
    backgroundPosition: 'center 40%',
    backgroundSize: 'cover',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
});

const Image = styled('span')(({ theme }) => ({
    alignItems: 'center',
    bottom: 0,
    color: theme.palette.common.white,
    display: 'flex',
    justfyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    backgroundColor: theme.palette.common.black,
    bottom: 0,
    left: 0,
    opacity: 0.4,
    position: 'absolute',
    right: 0,
    top: 0,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    bottom: -2,
    height: 3,
    left: 'calc(50% - 9px)',
    position: 'absolute',
    transition: theme.transitions.create('opacity'),
    width: 18,
}));