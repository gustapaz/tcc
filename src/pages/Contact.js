import React, { useEffect } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { testAccessibility } from '../App.test';

function Contact() {
    useEffect(() => {
        if (process.env.NODE_ENV !== 'production') {
            testAccessibility(document.body);
        }
    }, []);

    return (
        <Container>
            <img src="/images/contact_us.jpg" alt="Contato" className="img-edit" />
            <Typography variant="h4" gutterBottom>
                Contato
            </Typography>
            <Typography variant="body1" paragraph>
                Entre em contato conosco preenchendo o formulário abaixo:
            </Typography>
            <Box component="form" noValidate autoComplete="off">
                <TextField
                    label="Nome"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    type="email"
                />
                <TextField
                    label="Mensagem"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    multiline
                    rows={4}
                />
                <Button variant="contained" className="btn" type="submit" aria-label="Enviar">
                    Enviar
                </Button>
            </Box>
        </Container>
    );
}

export default Contact;
