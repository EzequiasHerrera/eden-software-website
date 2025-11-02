import "../styles/globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Eden Software",
	description: "El comienzo de algo grande...",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body
				className={`${inter.variable} ${geistMono.variable} ${geistSans.variable} antialiased`}
			>
				<Header/>
				{children}
				<Footer/>
			</body>
		</html>
	);
}
