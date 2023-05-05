import './App.css';
import Hero from './components/Hero';
import About from './components/about';
import Works from './components/works';
import Contact from './components/Contact';
import Test from './components/Test';

import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    color: white;
    background: url('/assets/img/bg.jpeg');
    &::-webkit-scrollbar {
        display: none;
    }
`;

export default function App() {
    return (
        <Container>
            <Hero />
            <About />
            <Works />
            <Contact />
            <Test />
        </Container>
    );
}
