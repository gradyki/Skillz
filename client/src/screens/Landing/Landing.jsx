import './Landing.css';
import logo from '../../assets/logo.jpg'
import SingleLineGridList from '../../components/SingleLineGrid/SingleLineGrid'
import CategoryCards from '../../components/CategoryCards/CategoryCards';


export default function Landing() {
  return (
    <div className='landing-container'>
      <div className='logo-container'>
       <img src={`${logo}`} />
      </div>
      <div>
       <SingleLineGridList />
      </div>
      <div className='Categories'>
        <CategoryCards />
      </div>
    </div>
  )
}
