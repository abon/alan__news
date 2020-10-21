import React from 'react';
import useStyles from './style';
import classNames from 'classnames';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i, activeArticle }) => {
    const classes = useStyles();


    return (
        <Card className={classNames(classes.card, activeArticle === i ? classes.activeCard : null)}>
            <CardActionArea href={url} target='_blank' >
                <CardMedia className={classes.media} image={urlToImage || 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'} title={title} />
                <div className={classes.details}>
                    <span> {(new Date(publishedAt)).toDateString()} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 3c-.825 0-1.5.675-1.5 1.5S11.175 6 12 6s1.5-.675 1.5-1.5S12.825 3 12 3zm0 15c-.825 0-1.5.675-1.5 1.5S11.175 21 12 21s1.5-.675 1.5-1.5S12.825 18 12 18zm0-7.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5z" fill="#a6a6a4" /></svg>{source.name}</span>
                </div>
                <CardContent>
                    <Typography className={classes.title}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" href={url} target='_blank'>
                    Find out more...
                 </Button>
                <Typography variant="h5" color="textSecondary" component="h2">{i + 1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard
