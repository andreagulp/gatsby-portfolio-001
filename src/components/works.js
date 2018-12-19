import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

// import './works.modules.css'

const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "works" } }) {
      edges {
        node {
          childMarkdownRemark {
            id
            frontmatter {
              title
              sub_title
              date
              _PARENT
            }
            fields {
              slug
            }
          }
        }
      }
    }
  }
`

const Works = ({ data, classes }) => (
  <StaticQuery
    query={query}
    render={data => {
      return (
        <div>
          {data.allFile.edges.map(({ node }) => (
            <div className="slide" key={node.childMarkdownRemark.id}>
              <h3>
                <Link to={node.childMarkdownRemark.fields.slug}>
                  {node.childMarkdownRemark.frontmatter.title}{' '}
                  <span>— {node.childMarkdownRemark.frontmatter.date}</span>
                </Link>
              </h3>
              <p>{node.childMarkdownRemark.excerpt}</p>
            </div>
          ))}
        </div>
      )
    }}
  />
)
export default Works
