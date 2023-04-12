import '../Styles/AboutStyles.css'
import before from '../../../Assets/PoolBefore.jpg'
import after from '../../../Assets/PoolAfter.jpg'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <>
      <section className='aboutContainer'>
        <div className='leftSide'>
          <h2 className='tertiaryTitle'>
            Why choose <span className='nameDrop'>Sunrise Pools</span>
          </h2>
          <p className='aboutDescription'>
            At Sunrise Pools we believe that every pool owner deserves to have a clean pool to look at as well as swim in. We make sure to work with
            you to bring the best solution to keep your pool as blue as you could imagine.
          </p>
          <div className='ctaWrapper'>
            <Link className='aboutCta' to='/'>
              Contact Us
            </Link>
          </div>
        </div>
        <div className='rightSide'>
          <h4>Before &amp; After</h4>
          <img src={before} alt='Dirty Pool' className='beforeAfter' />
          <img src={after} alt='Clean Pool' className='beforeAfter' />
        </div>
      </section>
    </>
  )
}
