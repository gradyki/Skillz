import './Landing.css';
import logo from '../../assets/logo.jpg'
import SingleLineGridList from '../../components/SingleLineGrid/SingleLineGrid'

export default function Landing() {
  return (
    <div className='landing-container'>
      <div className='logo-container'>
       <img src={`${logo}`} />
      </div>
      <div>
       <SingleLineGridList />
      </div>
      <div>
        <h1>
          Category Cards
        </h1>
      </div>
    </div>
  )
}
