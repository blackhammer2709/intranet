import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';

import AccountCircle from '@material-ui/icons/AccountCircle';

const Navbar = () =>{

    return(
        <div>
              <AppBar position="static">
                <Toolbar>
                  <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6">
                    BIENVENIDO AL S.I.A.
                  </Typography>

                    <div>
                      <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                      >
                        <AccountCircle />
                      </IconButton>
                    </div>
        </Toolbar>
      </AppBar>
    </div>
    );

}

export default Navbar;
