import './Home.css'
import headerImage from '../../assets/home/desktop/header-image.jpg'

export default function Home() {
  return (
    <div className='home-container'>
      <header>
        <div className='header-content'>
          <h4>NEW PRODUCT</h4>
          <h1>XX9 MARK II HEADPHONES</h1>
          <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast</p>
          <button>SEE PRODUCT</button>
        </div>
        <div className='hero-image'>
          <img src={headerImage} alt="" />
        </div>
      </header>
    </div>
  )
}
