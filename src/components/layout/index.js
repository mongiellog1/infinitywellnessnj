import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout_default.css'
import './layout_user.css'
import Header from './header'
import Footer from './footer'
import "typeface-alegreya";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            subTitle
          }
        }
      }
    `}
    render={({ site: { siteMetadata: { title }}}) => (
      <>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        <div className="app-background" />
          <div className="app-container" >
            {children}
            <Footer />
          </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
