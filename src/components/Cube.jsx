import { RenderTexture, PerspectiveCamera, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function Cube() {
    const textRef = useRef();

    useFrame(
        (state) =>
            (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
    );

    return (
        <mesh>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshStandardMaterial>
                <RenderTexture attach="map">
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <color attach="background" args={['#dc9dcd']} />
                    <Text ref={textRef} fontSize={2} color="#555">
                        hello
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    );
}
