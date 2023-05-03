import './App.css';
import Hero from './components/Hero';
import About from './components/about';
import Works from './components/works';
import Contact from './components/Contact';

import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    background-color: rebeccapurple;
`;

export default function App() {
    return (
        <Container>
            <Hero />
            <About />
            <Works />
            <Contact />
        </Container>
    );
}
