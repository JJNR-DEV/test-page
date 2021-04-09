import Link from 'next/link';
import SubLinkList from './SubLinkList';

/**
 * The data present is a representation of data collected from a CMS to ease Content Creators
 * in generating and changing content whenever necessary, following a pre determine format by the team
 */
import { data } from '../fakeData/footerLinks.json';

const Footer = () => {
  return (
    <footer>
      {
        data.map((item, i) => (
          <div key={ i }>
            <Link href={ item.link }>
              <a className='footer-link'>
                { item.linkName }
              </a>
            </Link>

            {
              item.subLinks && item.subLinks.length > 0 &&
                <SubLinkList list={ item.subLinks } />
            }
          </div>
        ))
      }
    </footer>
  )
}

export default Footer;
