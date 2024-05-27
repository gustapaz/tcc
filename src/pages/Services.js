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
            <img src="https://via.placeholder.com/1200x400" alt="Nossos Serviços" className="img-fluid" />
            <Typography variant="h4" gutterBottom>
                Nossos Serviços
            </Typography>
            <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque ante nec ligula fermentum, sed fringilla purus vestibulum. Donec rhoncus urna nec ligula consectetur consequat. Duis lobortis nec ipsum in posuere. Sed volutpat, enim eget vulputate rutrum, dui velit posuere mi, nec sodales est eros in libero. Nullam ac luctus nisl, vel sollicitudin metus. Curabitur ut sagittis eros. Integer varius orci nec erat hendrerit faucibus. Vestibulum in lacus sit amet lectus mattis aliquet. Pellentesque mattis elit non risus mollis laoreet. Nullam eleifend sit amet est vel sodales. Duis vitae luctus mi.
            </Typography>
            <Typography variant="body1" paragraph>
                Nulla facilisi. Curabitur id pulvinar lorem, vel dapibus massa. Aliquam erat volutpat. Nulla rutrum volutpat mi, a elementum metus consectetur sed. Vestibulum gravida ante eget metus posuere, a malesuada nisi tincidunt. Ut ultricies leo et augue egestas aliquet. Nam aliquet enim vitae nisl molestie, vitae tempor libero elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi luctus scelerisque urna, eget fermentum lacus malesuada eget.
            </Typography>
        </Container>
    );
}

export default Services;
