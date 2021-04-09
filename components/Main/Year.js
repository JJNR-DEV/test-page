const Year = ({ year }) => {
  const showYearStories = () => {
    if(typeof window !== 'undefined') {
      document.querySelector(`.year-${ year }`).scrollIntoView({
        behavior: "smooth",
        block: "center"
      })
    }
  }

  return (
    <div className='year-btn' onClick={ showYearStories }>
      { year }
    </div>
  )
}

export default Year;
