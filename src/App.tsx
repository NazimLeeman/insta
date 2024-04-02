import './App.css'
import InstaFeeds from './components/instaFeeds.js'

function App() {

  return (
    <>
      <header className='App-Header' style={{textAlign:"center"}}>
        <h1>hridoy_3000plus id posts fetching with Instagram API</h1>
      </header>
      <InstaFeeds token={"IGQWRQeW9HZA1BmSE4wS2xHY3lKay1LQURCZA2lUZAjRtOTBYdk5OakFRaEI1dzlTMFF0b3RvVzhyeWpyYnY4a0l4a080UFUtNGRtNV9ldU82U3hncWJXdmY0SmJ2clJ0WHFTaFZAzNFpvZAnhqQQZDZD"} limit={12}/>
    </>
  )
}

export default App
