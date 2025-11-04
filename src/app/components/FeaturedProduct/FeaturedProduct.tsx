import Image from "next/image";
import Button from "../Button/Button";

const FeaturedProduct = () => {
    return (
        <section className="flex justify-center items-center sm:h-screen w-full animate-fade-right">
            <div
                id="featured-product"
                className="flex flex-col-reverse md:flex-row align-bottom items-center md:h-[80vh] p-5 m-3 rounded-4xl sm:rounded-4xl bg-[url(/images/background_light.webp)] sm:bg-cover sm:bg-center w-2xl md:w-4xl lg:w-6xl border overflow-hidden">
                {/* 📱 SMARTPHONE */}
                <div className="relative flex flex-1/2 justify-center md:-bottom-30 animate-fade-up hover:-translate-y-2 transition duration-200">
                    <span className="rounded-2xl rounded-tr-none absolute pr-5 pl-8 py-1 right-32 top-15 bg-(--accent-color) text-(--primary-color) z-10 transition hover:scale-105 shadow-cyan-950 shadow-sm">
                        Necesito ayuda! 🙏🏻
                    </span>

                    <span className="rounded-2xl rounded-tl-none absolute pr-5 pl-8 py-1 left-32 top-25 bg-(--primary-color) text-(--accent-color-light) z-10 transition hover:scale-105 shadow-cyan-950">
                        No hay problema 👍🏻✅
                    </span>

                    <Image
                        src="/images/smartphone_front_bg.webp"
                        alt="Logo Eden Software"
                        width={360}
                        height={100}
                        priority
                        className="relative"
                    />
                </div>

                {/* TEXTO */}
                <div className="flex flex-col flex-1/2 justify-center items-center text-(--primary-color) pb-3">
                    <h2 className="text-8xl font-bold text-center">Chatbot 🤖</h2>
                    <p className="text-2xl mt-4 mb-6 text-center">
                        Sistema de respuestas automatizadas adaptable a tu negocio.
                    </p>
                    <ul className="bg-(--primary-color) p-4 rounded-2xl w-full list-disc list-inside md:text-xl text-(--accent-color-light) mb-5 shadow-2xl">
                        <li>Respuestas <span className="text-(--accent-color) font-bold">automáticas</span></li>
                        <li>Disponible <span className="text-(--accent-color) font-bold">24 horas</span></li>
                        <li>Sistema de <span className="text-(--accent-color) font-bold">palabras claves</span></li>
                        <li>Conexión a <span className="text-(--accent-color) font-bold">APIs</span> para consultas personalizadas</li>
                        <li>Flexibilidad y <span className="text-(--accent-color) font-bold">personalización total</span></li>
                        <li><span className="text-(--accent-color) font-bold">Asistencia técnica</span> 24 horas</li>
                        
                    </ul>
                    <Button text="Contrata ya" url="/home"/>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProduct;
