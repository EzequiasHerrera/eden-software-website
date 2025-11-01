"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "../Button/Button";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="bg-background fixed top-0 w-full flex justify-center p-5 antialiased">
			<div className="w-full md:max-w-xl flex p-3 items-center gap-5 justify-between md:justify-center">
				{/* <h1 className="text-2xl">Eden Software.</h1> */}
				<Image
					src="/images/eden_logo.png"
					alt="Logo Eden Software"
					width={60}
					height={60}
					priority
                    className="hover:scale-110 transition"
				/>

				{/* 🗒️ */}
				{/*
                // absolute
                // left-1/2 → posiciona el borde izquierdo del elemento en el centro del contenedor
                // -translate-x-1/2 → desplaza el elemento hacia la izquierda la mitad de su propio ancho para centrarlo completamente
                */}
				<nav
					className={`md:flex gap-8 ${menuOpen ? "block" : "hidden"} md:block`}
				>
					<a href="#hero" className="hover:text-(--accent-color)">
						Home
					</a>
					<a href="#about" className="hover:text-(--accent-color)">
						About Us
					</a>
					<a href="#contact" className="hover:text-(--accent-color)">
						Pricing
					</a>
				</nav>
                
                <Button text="Sign In" url="/blog"></Button>

				{/* 🍔 */}
				<button
					className="md:hidden"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					☰
				</button>
			</div>
		</header>
	);
};

export default Header;
