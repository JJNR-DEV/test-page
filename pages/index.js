import Head from 'next/head';
import { useState } from 'react';

import Header from '../components/header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/footer/Footer';
import { request } from '../lib/datocms';

export default function Home({ data }) {
  const [ dropdownActive, setDropdownActive ] = useState(false);
  const [ dropdownData, setDropdownData ] = useState(null);

  const dropdownInactive = () => {
    setDropdownData(null);
    setDropdownActive(false);
  }

  return (
    <>
      <Header
        dropdownActive={ setDropdownActive }
        dropdownData={ dropdownData }
        setDropdownData={ setDropdownData } />
      <main
        className={ dropdownActive ? 'darken-main main-content' : 'main-content' }
        onMouseEnter={ dropdownInactive } >
        <Main allHistory={ data } />
      </main>

      <Footer />
    </>
  )
}

const KLARNA_HISTORY = `
  query KlarnaHistory {
    allHistorries(orderBy: eventYear_DESC) {
      eventYear
      eventName
      eventDescription
      eventImage {
        url
        width
        height
      }
    }
  }`;

export async function getStaticProps() {
  const data = await request({
    query: KLARNA_HISTORY,
    variables: null
  });

  return {
    props: { data }
  };
}
