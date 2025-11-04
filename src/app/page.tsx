"use client";
import FeaturedProduct from "./components/FeaturedProduct/FeaturedProduct";
import Hero from "./components/Hero/Hero";
import { useSmoothScrollOnScroll } from "./hooks/useSmoothScrollOnScroll";

const Home = () => {
    useSmoothScrollOnScroll("featured-product", 1000);

    return (
        <main className="mb-5">
            <Hero />
            <FeaturedProduct />
        </main>
    );
};

export default Home;
