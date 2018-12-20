import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import SEO from '../components/seo'
import './index.modules.css'
import About from '../components/about'
import Works from '../components/works'
import Portfolio from '../components/portfolio'
// import Image from '../components/image'
import MenuNav from '../components/menu-nav'
import { PORTFOLIO_SECTIONS } from '../utils/portfolio-sections'

const anchors = PORTFOLIO_SECTIONS

const IndexPage = ({ data }) => {
  return (
    <>
      <MenuNav />
      <ReactFullpage
        licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
        // sectionsColor={['#285c34', '#ff5f45', '#277c39', '#282c34']}
        anchors={anchors}
        // navigation
        // navigationPosition="right"
        // navigationTooltips={anchors}
        slidesNavigation
        menu="menu"
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
              <div className="section" id="section1">
                <About />
              </div>
              <div className="section" id="section2">
                {/* <div className="slide">Very First Slide</div> */}
                <Works />
              </div>
              <div className="section" id="section3">
                <Portfolio />
              </div>
              <div className="section" id="section4">
                Section 4
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </>
  )
}

export default IndexPage
