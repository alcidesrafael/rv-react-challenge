import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PeopleIcon from '@material-ui/icons/People'
import AssignmentIcon from '@material-ui/icons/Assignment'

const listItems = (
  <div>
    <Link to="/users" style={{ textDecoration: 'none', color: '#535083' }}>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon style={{ color: '#535083' }} />
        </ListItemIcon>
        <ListItemText primary="Usuários" />
      </ListItem>
    </Link>
    <Link to="/posts" style={{ textDecoration: 'none', color: '#535083' }}>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon style={{ color: '#535083' }} />
        </ListItemIcon>
        <ListItemText primary="Publicações" />
      </ListItem>
    </Link>
  </div>
)

export default listItems
