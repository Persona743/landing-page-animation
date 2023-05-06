import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Development3d from './Development3d';

import styled from 'styled-components';

const Desc = styled.div`
    width: 200px;
    height: 145px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    top: 60px;
    right: 150px;

    @media only screen and (max-width: 768px) {
        top: 20px;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
`;

export default function Development() {
    return (
        <>
            <Canvas>
                <Stage environment={'city'} intensity={0.6}>
                    <Development3d />
                </Stage>
                <OrbitControls enableZoom={false} />
            </Canvas>
            <Desc>
                Working with the team of best devs to provide our client the
                smooth, fast and easy user experience.
            </Desc>
        </>
    );
}
