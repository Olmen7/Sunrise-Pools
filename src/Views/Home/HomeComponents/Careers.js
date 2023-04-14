import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Careers.css'

export const Careers = () => {
  return (
    <section className='bg-dark p-5'>
      <h2 className='subtitle textLight'>Do you think you have what it takes?</h2>
      <div className='ctaWrapper'>
        <Link to='/' className='careerLink'>
          Join the Team
        </Link>
      </div>
    </section>
  )
}
