import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { testAccessibility } from '../App.test';

function Services() {
    useEffect(() => {
        if (process.env.NODE_ENV !== 'production') {
            testAccessibility(document.body);
        }
    }, []);

    return (
        <Container>
            <img src="/images/our_services.jpg" alt="Nossos Serviços" className="img-fluid" />
            <Typography variant="h4" gutterBottom>
                Nossos Serviços
            </Typography>
            <Typography variant="body1" paragraph>
                A Agenda Cultural Inclusiva é dedicada a proporcionar uma ampla gama de serviços culturais acessíveis e inclusivos para todos os públicos. Nosso compromisso é oferecer experiências enriquecedoras que promovam a diversidade e a igualdade de acesso, garantindo que todos possam participar plenamente das atividades culturais que oferecemos.
            </Typography>
            <Typography variant="body1" paragraph>
                Oferecemos eventos que abrangem desde exposições artísticas e performances teatrais até workshops educacionais e visitas guiadas, todos projetados com um foco especial na acessibilidade. Cada evento é planejado meticulosamente para garantir que pessoas com diferentes habilidades e necessidades possam desfrutar de uma experiência cultural significativa e inclusiva.
            </Typography>
            <Typography variant="body1" paragraph>
                Nossa equipe colabora com artistas, instituições culturais e especialistas em acessibilidade para criar programas que atendam às diretrizes de acessibilidade e proporcionem um ambiente acolhedor e inclusivo para todos os participantes. Acreditamos que a cultura é um direito de todos, e trabalhamos incansavelmente para remover barreiras e criar oportunidades equitativas de envolvimento cultural.
            </Typography>
            <Typography variant="body1" paragraph>
                Ao escolher a Agenda Cultural Inclusiva, você está optando por apoiar iniciativas que promovem a inclusão e celebram a diversidade através da cultura. Junte-se a nós em nossa missão de tornar a cultura acessível a todos, contribuindo para uma sociedade mais inclusiva e consciente das necessidades de seus cidadãos.
            </Typography>
        </Container>
    );
}

export default Services;
