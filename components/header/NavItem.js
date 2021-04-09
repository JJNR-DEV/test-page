import Link from 'next/link';

const NavItem = ({
  item,
  dropdownActive,
  setDropdownData
}) => {
  const onHoverLink = () => {
    setDropdownData(item.dropdownData);
    dropdownActive(true);
  }

  return (
    <Link href={ item.link }>
      <div className='link' onMouseEnter={ onHoverLink }>
        <span>{ item.linkName }</span>
          {
            item.dropdownData !== null &&
              <svg style={{ height: '20', width: '20' }}>
                <path d='M16.3,6.06 L17.714,7.474 L12.128,13.06 C10.958,14.23 9.056,14.23 7.886,13.06 L2.3,7.474 L3.714,6.06 L9.3,11.646 C9.691,12.037 10.323,12.037 10.714,11.646 L16.3,6.06 Z' fill='rgba(23, 18, 15, 1)' style={{ transition: 'fill 0.2s ease 0s' }}>
                </path>
              </svg>
          }
      </div>
    </Link>
  )
}

export default NavItem;
