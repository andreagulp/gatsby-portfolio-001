import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import './index.modules.css'
import About from '../components/about'
import Works from '../components/works'
import Portfolio from '../components/portfolio'
// import Image from '../components/image'

const anchors = ['firstPage', 'secondPage', 'thirdPage']

const IndexPage = ({ data }) => {
  return (
    <ReactFullpage
      licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
      // anchors={anchors}
      sectionsColor={['#285c34', '#ff5f45', '#0411ec', '#282c34']}
      navigation
      navigationPosition="left"
      slidesNavigation
      navigationTooltips={anchors}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
            <div className="section">
              <About />
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Check Work Experience
              </button>
            </div>
            <div className="section" id="section-works">
              <Works />
            </div>
            <div className="section">
              <Portfolio />
            </div>
            <div className="section" id="section4">
              Section 4
            </div>
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            sub_title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
