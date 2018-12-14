import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Button from '@material-ui/core/Button'

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
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </div>
    )}
  />
)
export default About
