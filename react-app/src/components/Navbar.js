import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'


const NavBar = () => {
  return(
    <div>
    <AppBar position="static">
      <Toolbar>
        <Grid
        justify="space-between"
        container
        spacing={24}
        >
          <Grid item>
            <Typography variant="title" color="inherit">
            Goodbye Forever Mr. Vo
            </Typography>
          </Grid>

          <Grid item>
            <Button variant="contained" color="primary" justifyContent="right" href="/home">
            Home
            </Button>
            <Button variant="contained" color="primary" justifyContent="right" href="/stats">
            Stats
            </Button>
            <Button variant="contained" color="primary" justifyContent="right" href="/records">
            Records
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    </div>
  )
}
export default NavBar;
