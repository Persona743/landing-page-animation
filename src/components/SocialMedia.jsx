import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Social from './Social';

import styled from 'styled-components';

const Desc = styled.div`
    width: 180px;
    height: 85px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    top: 530px;
    right: 150px;
`;

export default function SocialMedia() {
    return (
        <>
            <Canvas>
                <Stage environment={'city'} intensity={0.6}>
                    <Social />
                </Stage>
                <OrbitControls enableZoom={false} />
            </Canvas>
            <Desc>Follow us on Social media</Desc>
        </>
    );
}
