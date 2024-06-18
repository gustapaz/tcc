import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { testAccessibility } from '../App.test';

function About() {
    useEffect(() => {
        if (process.env.NODE_ENV !== 'production') {
            testAccessibility(document.body);
        }
    }, []);

    return (
        <Container>
            <img src="/images/about_us.jpg" alt="Sobre Nós" className="img-fluid" />
            <Typography variant="h4" gutterBottom>
                Sobre a Agenda Cultural Inclusiva
            </Typography>
            <Typography variant="body1" paragraph>
                A Agenda Cultural Inclusiva é dedicada a promover a acessibilidade e a inclusão cultural por meio da divulgação de eventos que são acessíveis a todos. Nosso objetivo principal é facilitar o acesso a experiências culturais enriquecedoras que celebrem a diversidade em todas as suas formas. Acreditamos firmemente que a cultura deve ser um espaço inclusivo, onde todas as pessoas, independentemente de suas habilidades ou condições, possam participar plenamente e sentir-se bem-vindas. Portanto, trabalhamos para garantir que nossos eventos não apenas respeitem, mas também valorizem as diferentes necessidades e capacidades dos participantes.
            </Typography>
            <Typography variant="body1" paragraph>
                Comprometemo-nos a que cada evento seja um reflexo autêntico da pluralidade da sociedade. Entendemos que a inclusão vai além do acesso físico; envolve a criação de ambientes acolhedores e respeitosos onde todos possam se expressar livremente. Nossas iniciativas visam eliminar barreiras e estereótipos, promovendo uma cultura de respeito mútuo e entendimento. Ao fomentar um espaço cultural verdadeiramente inclusivo, esperamos inspirar outros a adotar práticas que fortaleçam a integração e a diversidade em suas próprias comunidades.
            </Typography>
            <Typography variant="body1" paragraph>
                A diversidade é o alicerce da nossa missão na Agenda Cultural Inclusiva. Através de uma programação diversificada e acessível, procuramos amplificar vozes sub-representadas e oferecer uma plataforma para expressões artísticas de todos os tipos. Nosso compromisso com a acessibilidade não se limita à presença física; também nos empenhamos em garantir que nossos eventos sejam comunicados e promovidos de maneira acessível, utilizando meios de comunicação que atendam às necessidades de todas as pessoas. Estamos comprometidos em construir uma sociedade mais justa e inclusiva por meio da cultura, capacitando indivíduos e comunidades para participar plenamente na vida cultural de nossa sociedade.
            </Typography>
        </Container>
    );
}

export default About;
