"use client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";

export default function Home() {
    const fadeIn = useSpring({
        from: { opacity: 0, transform: "translateY(20px)" },
        to: { opacity: 1, transform: "translateY(0px)" },
        config: { duration: 600 },
    });
    return (
        <div className=" text-white font-sans">
            <Parallax pages={10}>
                {/* Cielo fondo*/}
                <ParallaxLayer speed={0} factor={3} style={{ zIndex: -2 }}>
                    <div className="h-[1001vh] parallax-colors absolute top-0 left-0 w-full" />
                </ParallaxLayer>

                {/* ✨ Estrellas */}
                <ParallaxLayer
                    offset={1}
                    speed={2}
                    factor={10}
                    style={{
                        zIndex: -1,
                        backgroundImage: 'url("/images/starsbackground.png")',
                        backgroundSize: "",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top",
                    }}
                ></ParallaxLayer>

                {/* 🌌 Titulo Eden Software */}
                <ParallaxLayer
                    offset={0}
                    sticky={{ start: 0, end: 2 }}
                    speed={0.3}
                >
                    <div className="h-screen flex items-center justify-center">
                        <animated.h1
                            style={fadeIn}
                            className="text-6xl md:text-8xl max-w-sm leading-12 md:leading-18 font-bold text-center md:text-left"
                        >
                            Eden{"<>"} Software.
                        </animated.h1>
                    </div>
                </ParallaxLayer>

                {/* Este es el comienzo... */}
                <ParallaxLayer offset={3} speed={0.3} sticky={{ start: 3, end: 5 }}>
                    <div className="h-screen flex items-center justify-center">
                        <h2 className="text-6xl md:text-7xl max-w-sm leading-13 font-semibold text-center md:text-left">
                            Este es el comienzo...
                        </h2>
                    </div>
                </ParallaxLayer>

                {/* ☁️ Nube 1 */}
                <ParallaxLayer
                    offset={5}
                    speed={0.3}
                    factor={10}
                    style={{
                        zIndex: -1,
                        backgroundImage: 'url("/images/cloud.png")',
                        backgroundSize: "",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top",
                    }}
                ></ParallaxLayer>

                {/* ☁️ Nube 2 */}
                <ParallaxLayer
                    offset={8}
                    speed={0.3}
                    factor={10}
                    style={{
                        zIndex: -1,
                        backgroundImage: 'url("/images/littlecloud.png")',
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top",
                    }}
                ></ParallaxLayer>

                {/* 🌳 Tierra */}
                <ParallaxLayer offset={7} speed={0.3} sticky={{ start: 7, end: 8 }}>
                    <div className="h-screen flex items-center justify-center">
                        <h2 className="text-6xl md:text-7xl max-w-sm leading-13 font-semibold text-center md:text-left">
                            de algo realmente grande
                        </h2>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={9}
                    speed={2}
                    factor={10}
                    style={{
                        zIndex: -1,
                        backgroundImage: 'url("/images/eden_tree.png")',
                        backgroundSize: "",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top",
                    }}
                ></ParallaxLayer>
            </Parallax>
        </div>
    );
}
