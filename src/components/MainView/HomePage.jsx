import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import darkParticleOptions from "./particlesDark.json";
import lightParticleOptions from "./particlesLight.json";
const tsParticles = require("tsparticles-engine");




export function BG(props) {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    let theme = props.theme;
    console.log("THEME FROM BG: ",+theme);
    if(theme){
        return (
                
                <Particles options={darkParticleOptions} init={particlesInit} className="h-screen">
                    
                </Particles>  
        );
    }else{
        return (
            <Particles options={lightParticleOptions} init={particlesInit} className='h-screen'/>
        )
    }
}

export default BG;
