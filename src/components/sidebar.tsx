import './sidebar.css'
import logo from '../assets/logo.png'
const menuItems = [{ icon: '', label: 'Home' },
    { icon: '', label: 'Search' },
    { icon: '', label: 'Explore' }]

function Sidebar() {
  return (
      <div className="sidebar"><img src={logo} alt="" /> {menuItems.map((item) => (
          <div className='menuItem'>
              <div className="icon">{item.icon}</div>
              <div className="label">{item.label}</div>
          </div>
      ) )}
          
    </div>
  )
}

export default Sidebar