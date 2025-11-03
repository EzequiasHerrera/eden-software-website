import FeaturedProduct from "./components/FeaturedProduct/FeaturedProduct";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

const Home = () => {
    const handleScroll = () => {
        document
            .getElementById("next-section")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main>
            <Hero />
            <FeaturedProduct />
        </main>
    );
};

export default Home;
