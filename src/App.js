import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards'
import useStyles from './styles.js'
import wordsTonumbers from 'words-to-numbers'

const alanKey =
  '04935c3e9bb5cd781da51d52810c0def2e956eca572e1d8b807a3e2338fdd0dc/stage'
const App = () => {
  const [newsArticle, setNewsArticle] = useState([])
  const [activeArticle, setActiveArticle] = useState(-1)
  const classes = useStyles()
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticle(articles)
          setActiveArticle(-1)
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1)
        } else if (command === 'open') {
          const parsedNumber =
            number.length > 2 ? wordsTonumbers(number, { fuzzy: true }) : number
          const article = articles[parsedNumber - 1]
          if (parsedNumber > 20) {
            alanBtn().playText('Please try that again')
          } else if (article) {
            window.open(article.url, '_blank')
            alanBtn().playText('Opening...')
          }
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
