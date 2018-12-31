import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import CardHeader from '@material-ui/core/CardHeader'
import CardActionArea from '@material-ui/core/CardActionArea'

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/works/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            company
            date
            sub_title
            image {
              childImageSharp {
                fluid(maxWidth: 1050) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'left',
    marginLeft: 55,
    marginRight: 55,
    display: 'flex',
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Fjalla One',
    // marginTop: 50,
    // color: 'white',
    // textAlign: 'center',
  },
  subTitle: {
    // textAlign: 'center',
  },
  bigAvatar: {
    margin: 10,
    maxWidth: 160,
    maxHeight: 160,
    textAlign: 'center',
  },
  card: {
    maxWidth: 645,
  },
  media: {
    height: 140,
  },
  link: {
    textDecoration: 'none',
  },
})

const Works = ({ data, classes }) => (
  <StaticQuery
    query={query}
    render={data => {
      return (
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="slide" key={node.id}>
              <div className={classes.root}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    title="Contemplative Reptile"
                    image={node.frontmatter.image.childImageSharp.fluid.src}
                  />

                  <Link to={node.fields.slug} className={classes.link}>
                    <CardActionArea>
                      <CardHeader
                        title={`${node.frontmatter.title} @${
                          node.frontmatter.company
                        }`}
                        subheader={node.frontmatter.date}
                      />
                    </CardActionArea>
                  </Link>
                  <CardContent>
                    <Typography component="p">{node.excerpt}</Typography>
                  </CardContent>
                  <CardContent>
                    <Typography component="p">TAGS</Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={node.fields.slug}>
                      <Button size="small" color="primary">
                        Learn More
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </div>
            </div>
          ))}
        </div>
      )
    }}
  />
)
export default withStyles(styles)(Works)
