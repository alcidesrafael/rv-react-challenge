import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
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
  title: {
    marginLeft: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 350,
  },
  bigField: {
    width: 500,
  },
})

const UserInfo = ({ user, classes, onClick }) => (
  <div className={classes.container}>
    <CloseIcon className={classes.icon} onClick={() => onClick()} />
    <Typography component="h4" variant="h6" className={classes.title}>
      Informações do usuário
    </Typography>
    <TextField
      id="name"
      label="Nome"
      className={classes.textField}
      value={user.name}
      margin="normal"
      InputProps={{
        readOnly: true,
      }}
    />
    <TextField
      id="username"
      label="Usuário"
      className={classes.textField}
      value={user.username}
      margin="normal"
      InputProps={{
        readOnly: true,
      }}
    />
    <TextField
      id="email"
      label="E-mail"
      className={classes.textField}
      value={user.email}
      margin="normal"
      InputProps={{
        readOnly: true,
      }}
    />
    <TextField
      id="phone"
      label="Telefone"
      className={classes.textField}
      value={user.phone}
      margin="normal"
      InputProps={{
        readOnly: true,
      }}
    />
    <TextField
      id="website"
      label="Site"
      className={classes.textField}
      value={user.website}
      margin="normal"
      InputProps={{
        readOnly: true,
      }}
    />
    <Typography component="h6" variant="h6" style={{ marginTop: '30px', marginLeft: '7px' }}>
      Endereço
    </Typography>
    <TextField
      id="street"
      label="Endereço"
      className={classNames(classes.textField, classes.bigField)}
      value={`${user.address.street}, ${user.address.suite}`}
      margin="normal"
      InputProps={{
        readOnly: true,
      }}
    />
    <TextField
      id="city"
      label="Cidade"
      className={classes.textField}
      value={user.address.city}
      margin="normal"
      InputProps={{
        readOnly: true,
      }}
    />
    <TextField
      id="zipcode"
      label="CEP"
      className={classes.textField}
      value={user.address.zipcode}
      margin="normal"
      InputProps={{
        readOnly: true,
      }}
    />
    <Typography component="h6" variant="h6" style={{ marginTop: '30px', marginLeft: '7px' }}>
      Empresa
    </Typography>
    <TextField
      id="company"
      label="Nome da Empresa"
      className={classes.textField}
      value={user.company.name}
      margin="normal"
      InputProps={{
        readOnly: true,
      }}
    />
    <TextField
      id="catchphrases"
      label="Slogan"
      className={classNames(classes.textField, classes.bigField)}
      value={user.company.catchPhrase}
      margin="normal"
      InputProps={{
        readOnly: true,
      }}
    />
    <TextField
      id="bs"
      label="Negócio"
      className={classNames(classes.textField, classes.bigField)}
      value={user.company.bs}
      margin="normal"
      InputProps={{
        readOnly: true,
      }}
    />
  </div>
)

UserInfo.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default withStyles(styles)(UserInfo)
