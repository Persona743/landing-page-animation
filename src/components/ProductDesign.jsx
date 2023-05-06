import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Shoe from './Shoe';

export default function ProductDesign() {
    return (
        <Canvas>
            <Stage environment={'city'} intensity={0.6}>
                <Shoe />
            </Stage>
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
}