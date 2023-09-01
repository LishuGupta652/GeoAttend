import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



const Header = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Geo Attend
                        </Typography>
                        <Button color="inherit">
                            <Link to="/">Home</Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/login">Login</Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/signup">Signup</Link>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Header