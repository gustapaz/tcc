import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
    return (
        <Box component="footer" sx={{ p: 2, bgcolor: 'primary.main', color: 'white', mt: 'auto', textAlign: 'center' }}>
            <Typography variant="body1">
                &copy; 2024 Meu Aplicativo. Todos os direitos reservados.
            </Typography>
        </Box>
    );
}

export default Footer;
