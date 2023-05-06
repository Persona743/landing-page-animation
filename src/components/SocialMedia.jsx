import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Social from './Social';

export default function SocialMedia() {
    return (
        <Canvas>
            <Stage environment={'city'} intensity={0.6}>
                <Social />
            </Stage>
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
}
