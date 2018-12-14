import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import { Link, graphql } from 'gatsby'

import SEO from '../components/seo'
import './index.modules.css'
import About from '../components/about'
// import Image from '../components/image'

const anchors = ['firstPage', 'secondPage', 'thirdPage']

const IndexPage = ({ data }) => {
  return (
    <ReactFullpage
      licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
      // anchors={anchors}
      sectionsColor={['#282c34', '#ff5f45', '#0798ec']}
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
            <div className="section">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <div className="slide" key={node.id}>
                  <h3>
                    <Link to={node.fields.slug}>
                      {node.frontmatter.title}{' '}
                      <span>— {node.frontmatter.date}</span>
                    </Link>
                  </h3>
                  <p>{node.excerpt}</p>
                </div>
              ))}
            </div>
            <div className="section">
              <p>Section 3</p>
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
