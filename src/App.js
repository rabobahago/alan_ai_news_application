import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards'
import useStyles from './styles.js'

const alanKey =
  '04935c3e9bb5cd781da51d52810c0def2e956eca572e1d8b807a3e2338fdd0dc/stage'
const App = () => {
  const [newsArticle, setNewsArticle] = useState([])
  const [activeArticle, setActiveArticle] = useState(0)
  const classes = useStyles()
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setNewsArticle(articles)
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1)
        }
      },
    })
  }, [])
  return (
    <div>
      <div className={classes.logoContainer}>
        <img
          src="https://alan.app/voice/images/previews/preview.jpg"
          className={classes.alanLogo}
          alt="alan logo"
        />
      </div>
      <NewsCards articles={newsArticle} activeArticle={activeArticle} />
    </div>
  )
}

export default App
