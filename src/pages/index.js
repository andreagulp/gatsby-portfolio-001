import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
// import { graphql } from 'gatsby'

import SEO from '../components/seo'
import './index.modules.css'
import About from '../components/about'
// import About from './about'
import Works from '../components/works'
import Portfolio from '../components/portfolio'
// import Image from '../components/image'

const anchors = ['firstPage', 'secondPage', 'thirdPage', 'fourthPage']

export const Menu = () => {
  return (
    <div>
      <ul id="menu">
        <li data-menuanchor="firstPage">
          <a href="#firstPage">First section</a>
        </li>
        <li data-menuanchor="secondPage">
          <a href="#secondPage">Second section</a>
        </li>
        <li data-menuanchor="thirdPage">
          <a href="#thirdPage">Third section</a>
        </li>
        <li data-menuanchor="fourthPage">
          <a href="#fourthPage">Fourth section</a>
        </li>
      </ul>
    </div>
  )
}

const IndexPage = ({ data }) => {
  return (
    <>
      <Menu />
      <ReactFullpage
        // licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
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
                <button
                  style={{ marginTop: '55px' }}
                  onClick={() => fullpageApi.moveSectionDown()}
                >
                  Check Work Experience
                </button>
              </div>
              <div className="section" id="section2">
                <div className="slide">Very First Slide</div>
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

// export const query = graphql`
//   query {
//     allMarkdownRemark {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date
//             sub_title
//           }
//           fields {
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `

export default IndexPage
