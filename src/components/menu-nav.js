import React, { Component } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Work from '@material-ui/icons/Work'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Class from '@material-ui/icons/Class'
import Assessment from '@material-ui/icons/Assessment'
import Menu from '@material-ui/core/Menu'
import { PORTFOLIO_SECTIONS } from '../utils/portfolio-sections'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 10,
    marginRight: 20,
    position: 'fixed',
    zIndex: 5,
  },
  link: { textDecoration: 'none' },
}

const menuConfig = [
  {
    icon: <AccountCircle />,
    text: 'About Me',
    dataMenuanchor: PORTFOLIO_SECTIONS[0],
  },
  {
    icon: <Work />,
    text: 'My Experience',
    dataMenuanchor: PORTFOLIO_SECTIONS[1],
  },
  {
    icon: <Class />,
    text: 'My Portfolio',
    dataMenuanchor: PORTFOLIO_SECTIONS[2],
  },
  {
    icon: <Assessment />,
    text: 'My Skills',
    dataMenuanchor: PORTFOLIO_SECTIONS[3],
  },
]

class Navigation extends Component {
  state = {
    anchorEl: null,
  }

  handleClick = e => {
    this.setState({ anchorEl: e.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { classes } = this.props
    const { anchorEl } = this.state
    return (
      <div>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <List>
            {menuConfig.map((item, i) => {
              return (
                <a
                  href={`#${item.dataMenuanchor}`}
                  className={classes.link}
                  key={i}
                >
                  <ListItem
                    button
                    key={i}
                    onClick={this.handleClose}
                    data-menuanchor={item.dataMenuanchor}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                </a>
              )
            })}
          </List>
        </Menu>
      </div>
    )
  }
}

export default withStyles(styles)(Navigation)
