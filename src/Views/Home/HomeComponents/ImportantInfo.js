import '../Styles/ImportantInfo.css'
export const ImportantInfo = () => {
  return (
    <>
      <section className='typesOfPoolsContainer'>
        <h2 className='subtitle text-poolBlue'>Our Beliefs</h2>
        <ul className='importantInfoListWrapper'>
          <li className='importantInfoItem'>
            <h4 className='importantInfoTitle'>Flexibility</h4>
            <p className='importantInfoDescription'>
              We know that not every pool is the same so we make sure to offer a tailored maintanance plan that is right for you.
            </p>
          </li>
          <li className='importantInfoItem'>
            <h4 className='importantInfoTitle'>Worry Free</h4>
            <p className='importantInfoDescription'>
              After we start taking care of your pool we make sure it stays in the best shape possible to allow you to do nothing but enjoy a swim or
              a great view.
            </p>
          </li>
          <li className='importantInfoItem'>
            <h4 className='importantInfoTitle'>Consultations</h4>
            <p className='importantInfoDescription'>
              We go over any questions or concerns that you may have before so that you can be informed and well assured that we will take care of
              your pool the right way.
            </p>
          </li>
        </ul>
      </section>
    </>
  )
}
