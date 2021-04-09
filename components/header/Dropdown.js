import Link from 'next/link';

import DropdownListItem from './DropdownListItem';

const Dropdown = ({ dropdownData }) => {
  return (
    <div className={ dropdownData === null ? 'dropdown-hidden dropdown-container' : 'dropdown-container' }>
      {
        dropdownData !== null && dropdownData.length > 0 &&
          dropdownData.map((item, i) => {
            // Lists
            if(Object.keys(item).includes('linkList')) {
              return <DropdownListItem key={ i } list={ item.linkList } />
            } else {
              return (
                <Link key={ i } href={ item.link }>
                  <a className='dropdown-link'>
                    { item.linkName }
                  </a>
                </Link>
              )
            }
          })
      }
    </div>
  )
}

export default Dropdown;
