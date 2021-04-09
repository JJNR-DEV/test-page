import Link from 'next/link';

const SubLinkList = ({ list }) => {
  return (
    <div className='sublink-list'>
      {
        list.map((item, i) => (
          <Link key={ i } href={ item.link }>
            <a className='footer-sublink'>
              { item.linkName }
            </a>
          </Link>
        ))
      }
    </div>
  )
}

export default SubLinkList;
