import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards'

const alanKey =
  '04935c3e9bb5cd781da51d52810c0def2e956eca572e1d8b807a3e2338fdd0dc/stage'
const App = () => {
  const [newsArticle, setNewsArticle] = useState([])
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setNewsArticle(articles)
        }
      },
    })
  }, [])
  return (
    <div>
      <h2>Alan AI application news</h2>
      <NewsCards articles={newsArticle} />
    </div>
  )
}

export default App
