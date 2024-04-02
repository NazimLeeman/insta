import './App.css'
import InstaFeeds from './components/instaFeeds.js'
import { config } from './config.js'
import profile from './assets/pngegg.png'
import Sidebar from './components/sidebar.js'

function App() {

  return (
    <div className='wrapper'>
      <Sidebar/>
    <div className='container'>
      <header className='App-Header'>
        {/* <h1>hridoy_3000plus id posts fetching with Instagram API</h1> */}
        <div className='profile'><img src={profile} alt=""  className='profileImg'/></div>
        <div className='info'>
          <div className='userName'>hridoy</div>
          <div className='stats'>
            <div>4 Posts</div>
            <div>0 Followers</div>
            <div>0 Following</div>
          </div>
        </div>
      </header>
      <div className='instaFeed'>
      <InstaFeeds token={config.token} limit={12}/>
      </div>
    </div>
    </div>
    
  )
}

export default App
