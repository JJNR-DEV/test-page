import { useState, useEffect } from 'react';

import Timeline from './Timeline';
import Story from './Story';

const Main = ({ allHistory }) => {
  const [ yearsContainerLocal, setYearsContainerLocal ] = useState({});
  const years = [ ...new Set(allHistory.allHistorries.map((e) => e.eventYear)) ];

  // For stories where the year gets repeated
  let repeated = [];
  if(years.length < allHistory.allHistorries.length) {
    const allYears = allHistory.allHistorries;

    for(let i = 0; i < allYears.length; i++) {
      if(allYears[i + 1] !== undefined && allYears[i].eventYear === allYears[i + 1].eventYear) {
        repeated = [ ...repeated, i + 1 ];
      }
    }
  }

  const addRemoveCurrent = (unique, year) => {
    if (unique !== year && unique === '') {
      document.querySelector(`.year-${ year }`).classList.add('current');
    } else if (unique !== year) {
      document.querySelector('.current').classList.remove('current');
      document.querySelector(`.year-${ year }`).classList.add('current');
    }
  }

  useEffect(() => {
    const locations = Object.values(yearsContainerLocal);
    let unique = '';

    window.addEventListener('scroll', () => {
      let counter = 0;
      while (counter !== locations.length) {

        if (window.scrollY < locations[ counter ] && window.scrollY > locations[ counter + 1 ]) {
          const year = Object.keys(yearsContainerLocal)[ counter + 1 ];
          addRemoveCurrent(unique, year)
          unique = year;

          break;
        } else if (window.scrollY > locations[ counter ]) {
          const year = Object.keys(yearsContainerLocal)[ counter ];
          addRemoveCurrent(unique, year)
          unique = year;

          break;
        }

        counter++;
      }
    })
  })

  return (
    <>
      <div className='intro'>
        <h1 className='history-page-title'>Highlights Through History</h1>
        <Timeline years={ years } />
      </div>

      <div className='full-story'>
        {
          allHistory.allHistorries.map((item, i) => {
            if (i % 2 === 0 && repeated.includes(i)) {
              return <Story
                key={ i }
                story={ item }
                pairing={ 'pair' }
                repeated={ true }
                yearsContainerLocal={ yearsContainerLocal }
                setYearsContainerLocal={ setYearsContainerLocal } />
            } else if (i % 2 === 0) {
              return <Story
                key={ i }
                story={ item }
                pairing={ 'pair' }
                repeated={ false }
                yearsContainerLocal={ yearsContainerLocal }
                setYearsContainerLocal={ setYearsContainerLocal } />
            } else if (i % 2 !== 0 && repeated.includes(i)) {
              return <Story
                key={ i }
                story={ item }
                pairing={ 'inpair' }
                repeated={ true }
                yearsContainerLocal={ yearsContainerLocal }
                setYearsContainerLocal={ setYearsContainerLocal } />
            } else {
              return <Story
                key={ i }
                story={ item }
                pairing={ 'inpair' }
                repeated={ false }
                yearsContainerLocal={ yearsContainerLocal }
                setYearsContainerLocal={ setYearsContainerLocal } />
            }
          })
        }
      </div>
    </>
  )
}

export default Main;
