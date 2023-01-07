import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";

const tsParticles = require("tsparticles-engine");




export function BG() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
            <Particles options={particlesOptions} init={particlesInit} className="h-screen"/>
    );
}

export default BG;
