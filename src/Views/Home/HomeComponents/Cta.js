import React from 'react'
import { Link } from 'react-router-dom'

export const Cta = () => {
  return (
    <section className='ctaContainer'>
      <h2 className='subtitle textLight m-5'>Don't Wait</h2>
      <div className='ctaWrapper m-5'>
        <Link className='aboutCta' to='/'>
          Contact Us Now
        </Link>
      </div>
    </section>
  )
}
