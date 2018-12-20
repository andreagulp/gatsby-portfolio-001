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

const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "works" } }) {
      edges {
        node {
          childMarkdownRemark {
            excerpt
            id
            frontmatter {
              title
              sub_title
              date
              company
              image
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
const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'left',
    margin: 55,
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
})

const Works = ({ data, classes }) => (
  <StaticQuery
    query={query}
    render={data => {
      return (
        <div>
          {data.allFile.edges.map(({ node }) => (
            <div className="slide" key={node.childMarkdownRemark.id}>
              <div className={classes.root}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image="http://www.bluthemes.com/assets/img/blog/12/mountains.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardHeader
                    title={`${node.childMarkdownRemark.frontmatter.title} @${
                      node.childMarkdownRemark.frontmatter.company
                    }`}
                    subheader={node.childMarkdownRemark.frontmatter.date}
                  />
                  {/* <CardContent>
                    <Typography component="p">
                      {node.childMarkdownRemark.excerpt}
                    </Typography>
                  </CardContent> */}
                  <CardContent>
                    <Typography component="p">TAGS</Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={node.childMarkdownRemark.fields.slug}>
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
