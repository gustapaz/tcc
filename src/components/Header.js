import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Meu Aplicativo
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/about">Sobre</Button>
                <Button color="inherit" component={Link} to="/services">Serviços</Button>
                <Button color="inherit" component={Link} to="/contact">Contato</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
