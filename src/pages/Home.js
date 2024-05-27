import React, { useEffect } from 'react';
import { Container, Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { testAccessibility } from '../App.test';

function Home() {
    useEffect(() => {
        if (process.env.NODE_ENV !== 'production') {
            testAccessibility(document.body);
        }
    }, []);

    return (
        <Container>
            <Box my={5}>
                <Grid container spacing={5} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img src="https://via.placeholder.com/400x300" alt="Apresentação da LP" className="img-fluid" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>
                            Bem-vindo ao Meu Aplicativo
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Esta é a página inicial do seu aplicativo. Aqui você pode colocar qualquer conteúdo que desejar.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Box my={5}>
                <Grid container spacing={5} alignItems="center">
                    <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                        <Typography variant="h4" gutterBottom>
                            Sobre Nós
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Aqui você pode colocar informações sobre a sua empresa ou aplicação. Fale sobre sua missão, visão e valores.
                        </Typography>
                        <Button variant="contained" color="primary" component={Link} to="/about" aria-label="Ir para Sobre">
                            Saiba Mais
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                        <img src="https://via.placeholder.com/400x300" alt="Sobre Nós" className="img-fluid" />
                    </Grid>
                </Grid>
            </Box>

            <Box my={5}>
                <Grid container spacing={5} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img src="https://via.placeholder.com/400x300" alt="Nossos Serviços" className="img-fluid" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>
                            Nossos Serviços
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Descreva aqui os serviços que você oferece. Pode incluir detalhes sobre cada serviço e como eles beneficiam os seus clientes.
                        </Typography>
                        <Button variant="contained" color="primary" component={Link} to="/services" aria-label="Ir para Serviços">
                            Saiba Mais
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            <Box my={5}>
                <Grid container spacing={5} alignItems="center">
                    <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                        <Typography variant="h4" gutterBottom>
                            Contato
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Preencha o formulário abaixo para entrar em contato conosco.
                        </Typography>
                        <Button variant="contained" color="primary" component={Link} to="/contact" aria-label="Ir para Contato">
                            Saiba Mais
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                        <img src="https://via.placeholder.com/400x300" alt="Contato" className="img-fluid" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Home;
