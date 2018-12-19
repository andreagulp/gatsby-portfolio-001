import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
// import { graphql } from 'gatsby'

import SEO from '../components/seo'
import './index.modules.css'
import About from '../components/about'
import Works from '../components/works'
import Portfolio from '../components/portfolio'
// import Image from '../components/image'

const anchors = ['firstPage', 'secondPage', 'thirdPage']

// const Menu = () => {
//   return (
//     <div>
//       <ul id="myMenu">
//         <li data-menuanchor="firstPage" class="active">
//           <a href="#firstPage">First section</a>
//         </li>
//         <li data-menuanchor="secondPage">
//           <a href="#secondPage">Second section</a>
//         </li>
//         <li data-menuanchor="thirdPage">
//           <a href="#thirdPage">Third section</a>
//         </li>
//         <li data-menuanchor="fourthPage">
//           <a href="#fourthPage">Fourth section</a>
//         </li>
//       </ul>
//     </div>
//   )
// }

const IndexPage = ({ data }) => {
  return (
    <ReactFullpage
      licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
      // anchors={anchors}
      sectionsColor={['#285c34', '#ff5f45', '#277c39', '#282c34']}
      navigation
      navigationPosition="right"
      slidesNavigation
      navigationTooltips={anchors}
      // menu={<Menu />}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
            <div className="section">
              <About />
              <button
                style={{ marginTop: '55px' }}
                onClick={() => fullpageApi.moveSectionDown()}
              >
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
