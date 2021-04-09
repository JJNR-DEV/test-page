import Image from 'next/image';

const Story = ({ story, pairing }) => {
  return (
    <div className={ `history-event ${ pairing } year-${ story.eventYear }` }>
      <span className='year-for-timeline'>{ story.eventYear }</span>
      <div className='info-picture'>
        <h2>{ story.eventName }</h2>
        <p>{ story.eventDescription }</p>
      </div>
      <div className='info-picture'>
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
