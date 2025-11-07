import Button from "../components/Button/Button";
import styles from "./Pricing.module.css";

const page = () => {
    const priceContainerClass = `border h-3/4 animate-fade-up delay-100 p-6 rounded-2xl flex-1 max-w-80 shadow-2xl transition hover:drop-shadow-xs hover:shadow-white hover:z-10`;

    return (
        <main>
            <section className="flex justify-center items-center h-screen w-full gap-3 ">
                <div className={`${priceContainerClass}`}>
                    <h1 className="text-4xl mb-3">Basic</h1>
                    <p className="leading-5">
                        Este plan ofrece lo basico para que puedas comenzar a
                        vender tus productos.
                    </p>
                    <div className="mt-6 mb-6">
                        <h2 className="text-6xl font-bold ">
                            <span className="text-4xl">$</span>100
                        </h2>
                        <p>Por usuario & por mes</p>
                    </div>
                    <Button text="Comenzar" url="" full={true} />
                    <div className="mt-6">
                        <h3 className="text-xl font-bold">Caracteristicas</h3>
                        <p>Este paquete incluye:</p>
                        <ul className="mt-3 list-disc pl-5 text-(--accent-color-light)">
                            <li>Respuestas estáticas personalizadas</li>
                            <li>Registro de datos basicos de clientes</li>
                            <li>
                                3 cambios y mantenimiento inclusos sobre menú
                            </li>
                            <li>Soporte Técnico 24hs</li>
                        </ul>
                    </div>
                </div>
                <div className={`${priceContainerClass}`}>
                    <h1>Medium</h1>
                </div>
                <div className={`${priceContainerClass}`}>
                    <h1>Prime</h1>
                </div>
            </section>
        </main>
    );
};

export default page;
