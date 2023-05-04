import styled from 'styled-components';
import LineImg from '/assets/img/line.png';

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
`;

const Title = styled.h1`
    font-size: 60px;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;

const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Line = styled.img`
    height: 5px;
`;

const Subtitle = styled.h2`
    color: #da4ea2;
`;

const Desc = styled.p`
    font-size: 24px;
    color: lightgray;
`;

const Button = styled.button`
    background-color: #da4ea2;
    color: white;
    font-weight: 500;
    width: 120px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export default function About() {
    return (
        <Section>
            <Container>
                <Left>{/* 3d model */}</Left>
                <Right>
                    <Title>Think outside the box</Title>
                    <WhatWeDo>
                        <Line src={LineImg} />
                        <Subtitle>Who We Are</Subtitle>
                    </WhatWeDo>
                    <Desc>
                        A creative group of designers nad developers with a
                        passion for the arts.
                    </Desc>
                    <Button>See our works</Button>
                </Right>
            </Container>
        </Section>
    );
}
