import '../Styles/ServicesStyles.css'
import waterDrop from '../../../Assets/Drop.png'

export const Services = () => {
  return (
    <>
      <section className='servicesContainer'>
        <h2 className='subtitle'>Services We Provide</h2>
        <ul className='serviceWrapper'>
          <li className='serviceItem'>
            <img className='waterDrop' src={waterDrop} alt='Water Drop' />
            Weekly Cleaning
          </li>
          <li className='serviceItem'>
            <img className='waterDrop' src={waterDrop} alt='Water Drop' />
            Filter Cleaning
          </li>
          <li className='serviceItem'>
            <img className='waterDrop' src={waterDrop} alt='Water Drop' />
            Pool Restoration
          </li>
        </ul>
      </section>
    </>
  )
}
