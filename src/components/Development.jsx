import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Development3d from './Development3d';

export default function Development() {
    return (
        <Canvas>
            <Stage environment={'city'} intensity={0.6}>
                <Development3d />
            </Stage>
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
}
