import Button from "../Button/Button";

const Hero = () => {
    return (
        <section className="flex flex-col w-full min-h-screen justify-center items-center">
            <div>
                <h1 className="flex flex-col pb-3 text-6xl sm:text-7xl md:text-8xl font-bold -tracking-normal leading-12 sm:leading-14 md:leading-19 break-all">
                    <span className="animate-fade-left animate-delay-150">Eden</span>
                    <span className="animate-fade-left animate-delay-300">Software.</span>
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl p-1 animate-fade-left animate-delay-450">
                    El comienzo de algo grande...
                </p>
                <Button text="Comenzar ahora" url=""/>
            </div>
        </section>
    );
};

export default Hero;
