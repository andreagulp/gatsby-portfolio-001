import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './about.modules.css'

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const About = ({ data }) => (
  <StaticQuery
    query={query}
    render={data => (
      <div>
        <h1>{data.site.siteMetadata.title}</h1>
        <h3>{data.site.siteMetadata.description}</h3>
      </div>
    )}
  />
)
export default About
