import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Mac from './Mac';

export default function ContentCreation() {
    return (
        <Canvas>
            <Stage environment={'city'} intensity={0.6}>
                <Mac />
            </Stage>
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
}
