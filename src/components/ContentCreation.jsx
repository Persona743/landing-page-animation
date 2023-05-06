import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Mac from './Mac';

import styled from 'styled-components';

const Desc = styled.div`
    width: 200px;
    height: 100px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    top: 40px;
    right: 150px;
`;

export default function ContentCreation() {
    return (
        <>
            <Canvas>
                <Stage environment={'city'} intensity={0.6}>
                    <Mac />
                </Stage>
                <OrbitControls enableZoom={false} />
            </Canvas>
            <Desc>Do not worry about content creation. on us. ^____^</Desc>
        </>
    );
}
