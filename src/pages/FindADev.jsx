import React from 'react';
import '../styles/FindADev.css';

import {
  SimpleGrid, Center, Heading, Container,
} from '@chakra-ui/react';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Dev from '../Components/Dev';
import '../App.css';

function FindADev() {
  return (
    <Container maxW="100%" minH="100%" padding="0">
      <Navbar />

      <Container maxWidth="auto">
        <Heading textAlign="center">
          Here you can find aspiring, excellent, and motivated developers
          (Totally legit!)
        </Heading>
      </Container>

      <Center>
        <SimpleGrid columns={3} spacing={6}>
          <Dev
            name="Eric"
            description="Funny coding ape! I fucking love JavaScript"
            tags={['javascript', 'web']}
            email="ericlmtn@gmail.com"
          />
          <Dev
            name="Eric"
            description="Funny coding ape! I fucking love JavaScript"
            tags={['javascript', 'web']}
            email="ericlmtn@gmail.com"
          />
          <Dev
            name="Eric"
            description="Funny coding ape! I fucking love JavaScript"
            tags={['javascript', 'web']}
            email="ericlmtn@gmail.com"
          />
        </SimpleGrid>
      </Center>

      <Container textAlign="center">
        Also a dev?
        {' '}
        <a href="https://forms.gle/xyvu47J64Vz7HNnh9" className="gform-link">Let us know and we&lsquo;ll add you to this page!</a>
      </Container>
      <Footer />
    </Container>
  );
}

export default FindADev;
