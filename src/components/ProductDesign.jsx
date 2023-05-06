import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Shoe from './Shoe';

import styled from 'styled-components';

const Desc = styled.div`
    width: 180px;
    height: 60px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    top: 150px;
    right: 150px;
`;

export default function ProductDesign() {
    return (
        <>
            <Canvas>
                <Stage environment={'city'} intensity={0.6}>
                    <Shoe />
                </Stage>
                <OrbitControls enableZoom={false} />
            </Canvas>
            <Desc>Best Product for you</Desc>
        </>
    );
}
