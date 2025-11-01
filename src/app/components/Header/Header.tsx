"use client";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="bg-gray-900 fixed w-full flex justify-center">
			<div className="w-full md:max-w-xl flex p-3 items-center gap-5 justify-between md:justify-center">
				{/* <h1 className="text-2xl">Eden Software.</h1> */}
				<Image
					src="/images/eden_logo.png"
					alt="Logo Eden Software"
					width={60}
					height={60}
					priority
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
					<a href="#hero" className="hover:text-blue-600">
						Home
					</a>
					<a href="#about" className="hover:text-blue-600">
						About Us
					</a>
					<a href="#contact" className="hover:text-blue-600">
						Pricing
					</a>
				</nav>

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
