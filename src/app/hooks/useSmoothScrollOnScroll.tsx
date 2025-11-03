import { useEffect } from "react";

export const useSmoothScrollOnScroll = (id: string, duration = 1000) => {
    useEffect(() => {
        const smoothScrollTo = () => {
            const target = document.getElementById(id);
            if (!target) return;

            const targetY = target.getBoundingClientRect().top + window.scrollY;
            const startY = window.scrollY;
            const distance = targetY - startY;
            const startTime = performance.now();

            const easeInOutQuad = (t: number) =>
                t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

            const step = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = easeInOutQuad(progress);

                window.scrollTo(0, startY + distance * eased);

                if (progress < 1) {
                    requestAnimationFrame(step);
                }
            };

            requestAnimationFrame(step);
        };

        const onScroll = () => {
            smoothScrollTo();
            window.removeEventListener("scroll", onScroll);
        };

        window.addEventListener("scroll", onScroll, { once: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [id, duration]);
};
