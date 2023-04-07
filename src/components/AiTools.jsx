import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 1200,
        margin: '0 auto',
        padding: theme.spacing(4),
        [theme.breakpoints.down('md')]: {
            maxWidth: 960,
            padding: theme.spacing(3),
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: 600,
            padding: theme.spacing(2),
        },
    },
    card: {
        maxWidth: 345,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    media: {
        height: 200,
        backgroundSize: 'cover',
    },
}));

const cards = [
    {
        title: 'Card 1',
        image: 'https://picsum.photos/200',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet augue ac velit tristique pharetra sed in turpis.',
    },
    {
        title: 'Card 2',
        image: 'https://picsum.photos/201',
        text: 'Praesent sed magna at dolor lobortis mollis vel eu lorem. Morbi vestibulum mauris vel molestie tristique. Proin nec purus facilisis, lobortis quam a, venenatis metus.',
    },
    {
        title: 'Card 3',
        image: 'https://picsum.photos/202',
        text: 'Fusce porttitor finibus est, id convallis nulla consequat quis. Aliquam congue ut nulla ac euismod. Suspendisse non libero vel sapien auctor iaculis.',
    },
    {
        title: 'Card 4',
        image: 'https://picsum.photos/203',
        text: 'Suspendisse vulputate, sapien vel interdum lacinia, velit augue iaculis urna, in eleifend lectus felis id magna. Morbi sed lectus eget magna rhoncus pellentesque.',
    },
    {
        title: 'Card 5',
        image: 'https://picsum.photos/204',
        text: 'Sed quis elit in nisl euismod lacinia ac eu est. Nam vitae nibh quis dolor consequat molestie. In scelerisque mauris risus, non volutpat turpis eleifend a.',
    },
    {
        title: 'Card 6',
        image: 'https://picsum.photos/205',
        text: 'Etiam sollicitudin erat ac nibh suscipit, sed dignissim enim bibendum. Nulla facilisi. Curabitur at risus id est congue tristique.',
    },
    {
        title: 'Card 7',
        image: 'https://picsum.photos/206',
        text: 'Mauris placerat nibh sit amet odio pellentesque, ac lacinia augue elementum. Aliquam non eleifend mi. In vel metus ac sapien venenatis molestie.',
    },
    {
        title: 'Card 8',
        image: 'https://picsum.photos/207',
        text: 'Pellentesque id nulla quis elit pellentesque tincidunt. Proin bibendum, dolor vel tempus sagittis, quam nulla venenatis neque, ac ullamcorper sapien libero ac lacus. Etiam ut finibus purus, ac iaculis quam. Aliquam in est eu nibh aliquet facilisis.',
    },
    {
        title: 'Card 9',
        image: 'https://picsum.photos/208',
        text: 'Cras imperdiet arcu ac turpis malesuada, ut consequat lorem posuere. Vivamus sed tristique nibh, sit amet finibus purus. Aliquam sem dolor, laoreet nec eros sed, dictum scelerisque risus.',
    },
];

const AiTools = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                {cards.map((card) => (
                    <Grid item xs={12} sm={6} md={4} key={card.title}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={card.image}
                                title={card.title}
                            />
                            <CardContent className={classes.content}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {card.title}
                                </Typography>
                                <Typography>
                                    {card.text}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default AiTools;