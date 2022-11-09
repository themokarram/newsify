import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link, CardActionArea, } from '@mui/material';

export default class NewsItems extends Component {
    render() {
        let { title, description, image, newsurl } = this.props;

        return (
            <Card sx={{ margin: 3, height: 400, width: 400,boxShadow:5 }}>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        src={image}
                        sx={{height: 200, width: 400}}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                            <Link href={newsurl} target='_blank'>Read more</Link>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
}
