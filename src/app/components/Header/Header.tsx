"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "../Button/Button";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	return (
		<>
			<header className="bg-background fixed top-0 w-full flex p-5 justify-center antialiased">
				<div className="w-full md:max-w-xl flex p-3 items-center gap-5 justify-between md:justify-center">
					<a href="/">
						<Image
							src="/images/eden_logo.png"
							alt="Logo Eden Software"
							width={60}
							height={60}
							priority
							className="hover:scale-110 transition cursor-pointer"
						/>
					</a>

					{/* 🗒️ */}
					<nav className={`gap-8 hidden md:flex`}>
						<a href="#hero" className="hover:text-(--accent-color)">
							Home
						</a>
						<a
							href="#about"
							className="hover:text-(--accent-color)"
						>
							About Us
						</a>
						<a
							href="#contact"
							className="hover:text-(--accent-color)"
						>
							Pricing
						</a>
					</nav>

					<div className="hidden md:block">
						<Button text="Sign In" url="/blog"></Button>
					</div>

					{/* 🍔 */}
					<button
						className="hover:scale-110 transition md:hidden text-2xl cursor-pointer"
						onClick={() => setSidebarOpen(!sidebarOpen)}
					>
						☰
					</button>
				</div>
			</header>
			{sidebarOpen && <Sidebar onClose={() => setSidebarOpen(false)} />}
		</>
	);
};

export default Header;
