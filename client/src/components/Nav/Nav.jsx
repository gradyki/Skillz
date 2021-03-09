import './Nav.css'
import { Link } from 'react-router-dom'
import navlogo from '../../assets/navlogo.png'

export default function Nav(props) {
const {currentUser, handleLogout} =props

  return (
   
      <nav className='nav'>
      <div className='imgage-container'>
        <Link to='/'>
          <img id='nav-logo' src={`${navlogo}`} />
          </Link>
        </div>
        {
          currentUser ?
            <>
              <p>{currentUser.username}</p>
              <button onClick={handleLogout}>Logout</button>
              </>
            :
      
            <Link to='/login'>
              <h3>Login/Register</h3>
            </Link>
        }
      </nav>
    
  )
}


