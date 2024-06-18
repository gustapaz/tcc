import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
    return (
        <Box className="rodape" component="footer">
            <Typography variant="body1">
                &copy; 2024 ACI. Todos os direitos reservados.
            </Typography>
        </Box>
    );
}

export default Footer;
