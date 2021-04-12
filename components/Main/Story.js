import Image from 'next/image';

const Story = ({
  story,
  pairing,
  repeated,
  yearsContainerLocal,
  setYearsContainerLocal
}) => {

  if(typeof window !== 'undefined') {
    const location = document.querySelector(`.year-${ story.eventYear }`).offsetTop;
    yearsContainerLocal[`${ story.eventYear }`] = location;

    setYearsContainerLocal(yearsContainerLocal)
  }

  return (
    <div className={ `
      history-event
      ${ !repeated && 'history-timeline' }
      ${ pairing }
      year-${ story.eventYear }
    ` }>
      <span className='year-for-timeline'>{ story.eventYear }</span>
      <div className={ pairing === 'pair' ? 'info-picture left' : 'info-picture right' }>
        <h2>{ story.eventName }</h2>
        <p>{ story.eventDescription }</p>
      </div>
      <div className={ pairing === 'pair' ? 'info-picture right' : 'info-picture left' }>
        <Image
          alt='Image for event'
          src={ story.eventImage.url }
          width={ story.eventImage.width }
          height={ story.eventImage.height } />
      </div>
    </div>
  )
}

export default Story;
