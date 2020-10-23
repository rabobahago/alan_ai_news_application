import React, { useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'

const alanKey =
  '04935c3e9bb5cd781da51d52810c0def2e956eca572e1d8b807a3e2338fdd0dc/stage'
const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
    })
  }, [])
  return (
    <div>
      <h2>Alan AI application news</h2>
    </div>
  )
}

export default App
