import Year from './Year';

const Timeline = ({ years }) => {
  return (
    <div className='timeline'>
      {
        years.map((year, i) => <Year key={ i } year={ year } />)
      }
    </div>
  )
}

export default Timeline;
