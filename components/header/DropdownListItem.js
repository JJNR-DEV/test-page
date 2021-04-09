import Link from 'next/link';

const DropdownListItem = ({ list }) => {
  return (
    <>
    {
      list.map((item, i) => (
        <Link key={ i } href={ item.link }>
          <a className='dropdown-listitem-link'>
            { item.linkName }
          </a>
        </Link>
      ))
    }
    </>
  )
}

export default DropdownListItem;
