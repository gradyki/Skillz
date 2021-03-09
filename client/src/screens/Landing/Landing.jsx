import './Landing.css';
import logo from '../../assets/logo.jpg'

export default function Landing() {
  return (
    <div className='landing-container'>
      <div className='logo-container'>
       <img src={`${logo}`} />
      </div>
      <div>
        <h1>Scrolling Images Goes Here</h1>
      </div>
      <div>
        <h1>
          Category Cards
        </h1>
      </div>
    </div>
  )
}
