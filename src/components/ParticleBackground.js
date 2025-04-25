import Particles from "react-tsparticles";
import particleConfig from "./config/particle-config";
import React from "react";

export const ParticleBackground = () => {
    return(
        <div class="particlesBG">
            <Particles params={particleConfig}>

            </Particles>
        </div>
    )
}
