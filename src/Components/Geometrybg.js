import React from 'react'
import { Canvas } from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import useScrollPosition from "./useScrollPosition";

function Geometrybg(props) {

    const cont = React.useRef();
    // console.log(cont)
    const scrollPosition = useScrollPosition();

    // console.log(props);
  
    
  return (
    <div className="geometry" >
        
        <Canvas>
            <OrbitControls autoRotate ref={cont} enableDamping = {false} enablePan={false} enableRotate={false} enableZoom={false}/>
          <mesh rotation={[-Math.PI / 4, -Math.PI / 3, 0]}  scale={ [scrollPosition/100+1, scrollPosition/100+1, scrollPosition/100+1] }>
   <icosahedronBufferGeometry attach="geometry" args={[2, 0]} />
   <meshBasicMaterial attach="material" wireframe  color = {props.color}/>
  </mesh>
        </Canvas>
     </div>
    
    )
}

export default Geometrybg