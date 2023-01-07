import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import particlesOptions from "./particles.json";

export function BG() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="BG">
            <Particles options={particlesOptions} init={particlesInit}/>
            <header className="App-header">
            CONNOR BELEZNAY
            </header>
        </div>
    );
}

export default BG;
