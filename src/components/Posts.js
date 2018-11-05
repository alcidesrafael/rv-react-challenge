import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import PostInfo from './PostInfo'
import { SearchContext } from '../components/Dashboard'
import emptyImage from '../resources/images/empty.svg'

const styles = theme => ({
  container: {
    display: 'flex',
  },
  loading: {
    padding: theme.spacing.unit * 3,
    fontSize: '1rem',
  },
  listWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  list: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  postInfoWrapper: {
    whiteSpace: 'nowrap',
    position: 'absolute',
    overflowY: 'scroll',
    top: '0',
    right: '0',
    bottom: '0',
    height: '100%',
    width: '0px',
    zIndex: '9999',
    opacity: '0',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  isOpen: {
    width: '600px',
    padding: theme.spacing.unit * 3,
    opacity: '1',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  empty: {
    padding: theme.spacing.unit * 3,
    fontSize: '1rem',
    fontStyle: 'italic',
    color: '#cecece',
    textAlign: 'center',
  },
  imageWrapper: {
    textAlign: 'center',
    margin: '30px auto 60px auto',
  },
  image: {
    width: '50%',
    margin: '0 auto',
  },
})

const ListItemLink = props => <ListItem button component="a" {...props} />

class Posts extends React.Component {
  static contextType = SearchContext

  state = {
    editOpen: false,
    postSelected: [],
  }

  postInfoPanelHandler = post => {
    this.setState({
      editOpen: true,
      postSelected: post,
    })
  }

  closePostInfoPanel = () => {
    this.setState({
      editOpen: false,
    })
  }

  render() {
    const { classes, isFetching, posts } = this.props
    const { editOpen, postSelected } = this.state
    const postsFiltered = posts.filter(post =>
      post.title.toLowerCase().includes(this.context.search.toLowerCase())
    )
    return (
      <React.Fragment>
        <div className={classes.container}>
          <div className={classes.listWrapper}>
            <Typography component="h2" variant="h6" color="inherit" noWrap>
              Lista de Publicações
            </Typography>
            <Paper className={classes.list}>
              {isFetching ? (
                <Typography className={classes.loading}>Carregando...</Typography>
              ) : (
                <List>
                  {postsFiltered.length > 0 ? (
                    postsFiltered.map(post => (
                      <ListItemLink key={post.id} onClick={() => this.postInfoPanelHandler(post)}>
                        <ListItemText primary={post.title} />
                      </ListItemLink>
                    ))
                  ) : (
                    <div>
                      <Typography className={classes.empty}>
                        Nenhum resultado encontrado.
                      </Typography>
                      <div className={classes.imageWrapper}>
                        <img src={emptyImage} alt="Empty" className={classes.image} />
                      </div>
                    </div>
                  )}
                </List>
              )}
            </Paper>
          </div>
          <Paper className={classNames(classes.postInfoWrapper, editOpen && classes.isOpen)}>
            {editOpen && <PostInfo post={postSelected} onClick={() => this.closePostInfoPanel()} />}
          </Paper>
        </div>
      </React.Fragment>
    )
  }
}

Posts.propTypes = {
  classes: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

export default withStyles(styles)(Posts)
