"use client";
import { Star } from "@phosphor-icons/react";
import Image from "next/image"
import stars from "public/star.png"
import { useState, useRef, useEffect } from "react";

const linguagens = [
    "Python",
    "ZenScript",
    "React_Native",
    "SQL",
    "JavaScript",
    "React",
    "Figma",
    "GitHub",
    "HTML",
    "CSS",
    "TypeScript",
    "Java",
    "PHP",
    "Expo",
    "WordPress",
    "C#"
]


const linguagensCycle = [...linguagens, ...linguagens, " "];

export default function Linguagens() {
    const [rotate, setRotate] = useState(-6);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (prevScrollY.current < currentScrollY) {
        // Scrolling down
        setRotate(0);
      } else {
        // Scrolling up
        setRotate(-6);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (
        <div className="linearWhiteBackgroundTransparent overflow-hidden py-6" style={{ transform: `rotate(${rotate}deg)`, transition: "transform 0.6s ease-in-out"  }}>
            <div className=" animate-scrolling flex gap-16 items-center flex-nowrap">
            {linguagensCycle.map((linguagem, index) => (
                    <div key={index} className="text-cenoura text-1xl md:text-2xl font-bold flex gap-12">
                        <div className="block w-auto">{linguagem}</div>
                        <Star className="text-cenoura text-2xl"/>
                    </div>
                ))}
            </div>
        </div>
    )
}