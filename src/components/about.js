import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'

// import MePhoto from './image'

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        photoUrl
      }
    }
  }
`

const styles = {
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  bigAvatar: {
    // marginTop: -120,
    width: 160,
    height: 160,
  },
  title: {
    fontFamily: 'Fjalla One',
    marginTop: 50,
    color: 'white',
  },
  subTitle: {
    fontFamily: 'Fjalla One',
    color: 'white',
  },
  arrow: {
    color: 'white',
    marginTop: 100,
  },
}

const About = ({ data, classes }) => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        console.log('data from about', data)
        return (
          <div className={classes.root}>
            <div className={classes.row}>
              <Avatar
                alt={data.site.siteMetadata.title}
                className={classes.bigAvatar}
                // src={data.site.siteMetadata.photoUrl}
                src="https://todayshomeinc.com/wp-content/uploads/2016/07/DenzelAvatar.jpg"
              />
            </div>
            <Typography
              className={classes.title}
              component="h2"
              variant="h1"
              gutterBottom
            >
              {data.site.siteMetadata.title}
            </Typography>
            <Typography
              className={classes.subTitle}
              component="h4"
              variant="h4"
              gutterBottom
            >
              {data.site.siteMetadata.description}
            </Typography>

            {/* <h1>{data.site.siteMetadata.title}</h1>
        <h3>{data.site.siteMetadata.description}</h3>
        <Button variant="contained" color="primary">
          Primary
        </Button> */}
          </div>
        )
      }}
    />
  )
}
export default withStyles(styles)(About)
