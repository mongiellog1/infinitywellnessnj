import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout_default.css'
import './layout_user.scss'
import Header from './header'
import Footer from './footer'
import "typeface-alegreya";
import ScrollToElement from "../hoc/scroll_to_element";


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            SNIPCART_API_KEY
          }
        }
      }
    `}
    render={({ site: { siteMetadata: { title, SNIPCART_API_KEY }}}) => (
      <>
      <ScrollToElement />
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: 'Reclaim Wellness and transform your world. Ask about the beginner\'s special' },
            { name: 'keywords', content: 'Health, Wellness, Emotional Freedom Techniques, EFT, MFR, Myofascial Release, Mandalas' },
          ]}
        >
          {/* Mail Chimp signup modal */}
          <script type="text/javascript" src="//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js" data-dojo-config="usePlainJson: true, isDebug: false" />
          <script type="text/javascript">{`
              setTimeout(function () {
                window.dojoRequire && window.dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us20.list-manage.com","uuid":"f433ad20a7bc026c33b8ca614","lid":"55c671849b","uniqueMethods":true}) })
              }, 1000)
            `}</script>
          {/* Snip Cart */}
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js" />
          <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" id="snipcart" data-api-key={SNIPCART_API_KEY} />
          <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" type="text/css" rel="stylesheet" />
          <html lang="en" />

          {/* <meta property="og:url" content={siteUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en" />
          <meta property="og:site_name" content={title} /> */}
        </Helmet>
        <Header />
        <div className="app-background" />
          <div className="app-container" >
            {children}
          </div>
          <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
