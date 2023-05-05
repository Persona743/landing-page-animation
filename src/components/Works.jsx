import { useState } from 'react';
import styled from 'styled-components';
import WebDesign from './WebDesign';
import Development from './Development';
import ProductDesign from './ProductDesign';

const data = [
    'Web Design',
    'Development',
    'Content Creation',
    'Product Design',
    'Social Media',
];

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ListItem = styled.li`
    font-size: 55px;
    font-weight: bold;
    cursor: pointer;
    color: transparent;
    -webkit-text-stroke: 0.5px white;
    position: relative;

    ::after {
        content: '${(props) => props.text}';
        position: absolute;
        top: 0;
        left: 0;
        color: #e84393;
        width: 0;
        overflow: hidden;
        white-space: nowrap;
    }

    &:hover {
        ::after {
            /* -webkit-text-stroke-color: #0984e3; */
            animation: moveText 0.5s linear both;

            @keyframes moveText {
                to {
                    width: 100%;
                }
            }
        }
    }
`;

const Right = styled.div`
    flex: 1;
`;

export default function Works() {
    const [work, setWork] = useState('Web Design');
    return (
        <Section id="works">
            <Container>
                <Left>
                    <List>
                        {data.map((item) => (
                            <ListItem
                                key={item}
                                text={item}
                                onClick={() => setWork(item)}
                            >
                                {item}
                            </ListItem>
                        ))}
                    </List>
                </Left>
                <Right>
                    {work === 'Web Design' ? (
                        <WebDesign />
                    ) : work === 'Development' ? (
                        <Development />
                    ) : (
                        <ProductDesign />
                    )}
                </Right>
            </Container>
        </Section>
    );
}
