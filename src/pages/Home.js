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
                        <img src="/images/cultural_event.jpg" alt="Evento Cultural Inclusivo" className="img-fluid" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>
                            Bem-vindo à Agenda Cultural Inclusiva
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Explore eventos culturais acessíveis para todos. Encontre e participe de experiências culturais inclusivas perto de você.
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
                            A Agenda Cultural Inclusiva está comprometida em tornar a cultura acessível a todos, promovendo eventos inclusivos que celebram a diversidade.
                        </Typography>
                        <Button variant="contained" className="btn" component={Link} to="/about" aria-label="Ir para Sobre">
                            Saiba Mais
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                        <img src="/images/about_us.jpg" alt="Sobre Nós" className="img-fluid" />
                    </Grid>
                </Grid>
            </Box>

            <Box my={5}>
                <Grid container spacing={5} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img src="/images/our_services.jpg" alt="Nossos Serviços" className="img-fluid" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>
                            Nossos Serviços
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Descubra uma variedade de serviços culturais acessíveis. Explore eventos, exposições, teatros e muito mais.
                        </Typography>
                        <Button variant="contained" className="btn" component={Link} to="/services" aria-label="Ir para Serviços">
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
                            Entre em contato conosco para mais informações sobre eventos culturais inclusivos ou para sugerir novas iniciativas.
                        </Typography>
                        <Button variant="contained" className="btn" component={Link} to="/contact" aria-label="Ir para Contato">
                            Saiba Mais
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                        <img src="/images/contact_us.jpg" alt="Contato" className="img-fluid" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Home;
