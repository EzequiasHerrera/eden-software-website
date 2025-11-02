import Button from "../Button/Button";

const Hero = () => {
	return (
		<section className="flex flex-col w-full min-h-screen justify-center items-center">
			<div>
				<h1 className="flex flex-col mb-5 md:mb-6 lg:mb-8 text-6xl sm:text-7xl md:text-8xl font-bold -tracking-normal leading-12 sm:leading-14 md:leading-19 break-all -translate-x-0.5">
					<span className="animate-fade-left animate-delay-100 -translate-x-0.5">
						Eden
					</span>
					<span className="animate-fade-left animate-delay-200">
						Software.
					</span>
				</h1>
				<p className="text-xl mb-5 md:mb-6 lg:mb-8 sm:text-2xl md:text-3xl animate-fade-left animate-delay-300">
					El comienzo de algo grande...
				</p>
				<div className="animate-fade-left animate-delay-400">
					<Button text="Comenzar ahora" url="" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
