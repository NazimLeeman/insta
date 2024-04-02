import './App.css'
import InstaFeeds from './components/instaFeeds.js'
import { config } from './config.js'

function App() {

  return (
    <>
      <header className='App-Header' style={{textAlign:"center"}}>
        <h1>hridoy_3000plus id posts fetching with Instagram API</h1>
      </header>
      <InstaFeeds token={config.token} limit={12}/>
    </>
  )
}

export default App
