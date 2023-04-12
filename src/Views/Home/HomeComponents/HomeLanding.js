import { Link } from 'react-router-dom'
import '../Styles/HomeLandingStyles.css'

export const HomeLanding = () => {
  return (
    <>
      <section className='heroImg'>
        <div className='landingCtaContainer'>
          <h1 className='businessName'>Sunrise Pools</h1>
          <p className='landingDescription'>Pools without care become swamps. Allow us to keep your pools blue and clean all year round.</p>
          <Link className='landingCta' to='/'>
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
