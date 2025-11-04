import Image from "next/image";
import Button from "../Button/Button";

const FeaturedProduct = () => {
    return (
        <section id="featured-product" className="flex flex-col items-center h-screen animate-fade-up w-full ">
            <div className="flex flex-col-reverse items-center md:flex-row h-2/4 lg:h-3/4 animate-fade-left bg-[url(/images/background_light.webp)] bg-cover bg-center  transition duration-100 w-full md:w-3xl lg:w-5xl justify-around sm:rounded-4xl overflow-hidden">
                <div className="flex-1/2 h-full flex justify-center">
                    <Image
                        src="/images/smartphone_front_bg.webp"
                        alt="Logo Eden Software"
                        width={250}
                        height={200}
                        priority
                        className="md:fixed -bottom-30 transition hover:scale-105 drop-shadow-xl drop-shadow-gray-600"
                    />
                </div>
                <div className="h-full flex flex-1/2 flex-col justify-center items-center text-(--primary-color)">
                    <h2 className="text-7xl">
                        Chatbot
                    </h2>
                    <p className="text-2xl mt-4 mb-6">
                        Sistema de respuestas automatizadas
                    </p>
                    <Button text="Contrata ya" url="/home" />
                </div>
            </div>
        </section>
    );
};

export default FeaturedProduct;
