"use client";
import { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesContainer() {
    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async () => { }, []);
    return (
        <div className="absolute top-0 left-0 w-full h-full z-[-1]">
            <Particles
                className="absolute top-0 left-0 w-full h-full z-[-1]"
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: { enable: false },
                    background: {
                        color: {
                            value: "#000000",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 90,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#e68e2e",
                    },
                    links: {
                        color: "#f5d393",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: true,
                        value: 5,
                    },
                },
                detectRetina: true,
            }
            }
            />
        </div>
    );
}
