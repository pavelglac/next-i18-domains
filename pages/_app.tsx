import type { NextPage } from 'next'
import type { AppProps } from 'next/app'


const App = ({ router }: AppProps) => {
  const locale = router.locale

  return (
    <h1>Locale: {locale}</h1>
  )
}

export default App
