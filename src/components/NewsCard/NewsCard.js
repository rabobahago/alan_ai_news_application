import React from 'react'
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core'
const NewsCard = ({
  articles: { description, publishedAt, source, title, url, urlToImage },
  i,
}) => {
  return (
    <div>
      <Card>
        <CardActionArea>
          <CardMedia image={urlToImage} />
          <div>
            <Typography
              variant="body2"
              color="textSecondary"
              component="h2"
            ></Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="h2"
            ></Typography>
          </div>
          <Typography gutterBottom variant="h5"></Typography>
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            ></Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary"></Button>
          <Typography variant="h5" color="textSecondary"></Typography>
        </CardActions>
      </Card>
    </div>
  )
}
export default NewsCard
