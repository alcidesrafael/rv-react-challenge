import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PeopleIcon from '@material-ui/icons/People'
import AssignmentIcon from '@material-ui/icons/Assignment'

const listItems = (
  <div>
    <Link to="/users" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Usuários" />
      </ListItem>
    </Link>
    <Link to="/posts" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Publicações" />
      </ListItem>
    </Link>
  </div>
)

export default listItems
