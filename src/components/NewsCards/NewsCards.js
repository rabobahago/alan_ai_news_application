import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import { Grid, Grow, Typography } from '@material-ui/core'

const NewsCards = ({ articles }) => {
  return (
    <Grow in>
      <Grid container alignItems="stretch" spacing={3}>
        {articles.map((articles, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard articles={articles} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  )
}
export default NewsCards
