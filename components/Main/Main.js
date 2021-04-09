import Timeline from './Timeline';
import Story from './Story';

const Main = ({ allHistory }) => {
  const years = [ ...new Set(allHistory.allHistorries.map((e) => e.eventYear)) ];

  return (
    <div onScroll={ (y) => console.log(y) }>
      <Timeline years={ years } />

      <div className='full-story' onScroll={ (y) => console.log(y) }>
        {
          allHistory.allHistorries.map((item, i) => {
            return i % 2 === 0 ?
              <Story key={ i } story={ item } pairing={ 'pair' } /> :
              <Story key={ i } story={ item } pairing={ 'inpair' } />
          })
        }
      </div>
    </div>
  )
}

export default Main;
