import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Controller from './Controller';

import styled from 'styled-components';

const Desc = styled.div`
    width: 200px;
    height: 160px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    top: 530px;
    right: 500px;

    @media only screen and (max-width: 768px) {
        top: 20px;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
`;

export default function WebDesign() {
    return (
        <>
            <Canvas>
                <Stage environment={'city'} intensity={0.6}>
                    <Controller />
                </Stage>
                <OrbitControls enableZoom={false} />
            </Canvas>
            <Desc>
                We Design with passion for creating a wordl class design and
                ensuring your product to be competable in the market.
            </Desc>
        </>
    );
}
