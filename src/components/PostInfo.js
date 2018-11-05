import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'

const styles = theme => ({
  icon: {
    width: theme.spacing.unit * 9,
    height: theme.spacing.unit * 9,
    padding: theme.spacing.unit * 3,
    position: 'absolute',
    top: '0',
    right: '0',
    cursor: 'pointer',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 350,
  },
  bigField: {
    width: 500,
  },
  title: {
    marginLeft: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
  },
  label: {
    margin: theme.spacing.unit,
    fontSize: '12px',
    color: 'rgba(0, 0, 0, 0.54)',
  },
  content: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
    whiteSpace: 'normal',
    textAlign: 'justify',
    fontSize: '1rem',
  },
})

const PostInfo = ({ post, classes, onClick }) => (
  <div className={classes.container}>
    <CloseIcon className={classes.icon} onClick={() => onClick()} />
    <Typography component="h4" variant="h6" className={classes.title}>
      Informações da publicação
    </Typography>
    <Typography className={classes.label}>Título</Typography>
    <Typography className={classes.content}>{post.title}</Typography>
    <Typography className={classes.label}>Corpo</Typography>
    <Typography className={classes.content}>{post.body}</Typography>
    <TextField
      id="author"
      label="Usuário Autor"
      className={classes.textField}
      value={post.author}
      margin="normal"
      InputProps={{
        readOnly: true,
      }}
    />
  </div>
)

PostInfo.propTypes = {
  post: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default withStyles(styles)(PostInfo)
