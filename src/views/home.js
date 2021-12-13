import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Dynamic Security Strategist</title>
        <meta property="og:title" content="Dynamic Security Strategist" />
      </Helmet>
    </div>
  )
}

export default Home
