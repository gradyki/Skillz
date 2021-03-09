import './Nav.css'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
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
            <div className='username-logout'>
            <p>{currentUser.username}</p>
            <Button onClick={handleLogout} variant="contained" color="primary">
  Logout
              </Button>
              </div>
            
              </>
            :
      <div className='login-button'>
            <Link to='/login'>
            <Button onClick={handleLogout} variant="contained" color="primary">
  Login/Register
              </Button>
            </Link>
            </div>
        }
      </nav>
    
  )
}


