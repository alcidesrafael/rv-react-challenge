import React from 'react'
import Typography from '@material-ui/core/Typography'
import dashboardImage from '../resources/images/dashboard.svg'

const Home = () => (
  <React.Fragment>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        component="h1"
        variant="h5"
        color="inherit"
        noWrap
        style={{ margin: '30px auto' }}
      >
        Bem-vindo ao seu dashboard.
      </Typography>
      <img src={dashboardImage} alt="Dashboard" style={{ width: '50%' }} />
    </div>
  </React.Fragment>
)

export default Home
