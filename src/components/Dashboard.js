import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import InputBase from '@material-ui/core/InputBase'
import { fade } from '@material-ui/core/styles/colorManipulator'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import SearchIcon from '@material-ui/icons/Search'
import listItems from './listItems'
import { searchInput } from '../actions/search'

const drawerWidth = 240

const styles = theme => ({
  root: {
    display: 'flex',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    backgroundColor: '#575757',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
})

export const SearchContext = React.createContext()

class DashboardCont extends React.Component {
  getSearchInput = e => {
    let key = e.target.value
    this.props.dispatch(searchInput(key))
  }

  render() {
    const { classes, children, search } = this.props
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar position="absolute" className={classNames(classes.appBar, classes.appBarShift)}>
            <Toolbar>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Busca..."
                  onChange={e => this.getSearchInput(e)}
                  value={search}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper),
            }}
          >
            <div className={classes.logo}>
              <Link to="/" style={{ textDecoration: 'none', color: '#000000' }}>
                <Typography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                  className={classes.title}
                >
                  LOGO
                </Typography>
              </Link>
            </div>
            <Divider />
            <List>{listItems}</List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <SearchContext.Provider value={{ search: search }}>{children}</SearchContext.Provider>
          </main>
        </div>
      </React.Fragment>
    )
  }
}

DashboardCont.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  search: PropTypes.string.isRequired,
}

const mapStateToProps = state => {
  const { search } = state.search
  return {
    search,
  }
}

const Dashboard = withStyles(styles)(DashboardCont)

export default withRouter(connect(mapStateToProps)(Dashboard))
