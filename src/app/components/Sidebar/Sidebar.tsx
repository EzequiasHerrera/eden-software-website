import Button from "../Button/Button";

type Props = {
    onClose: () => void;
};

const Sidebar = ({ onClose }: Props) => {
    return (
        <div className="fixed rounded-l-xl top-0 right-0 min-h-screen min-w-1/2 p-6 bg-(--accent-color-light) text-(--primary-color) z-10 animate-ease-in-out animate-fade-left">
            <button
                className="hover:scale-110 transition md:hidden text-2xl cursor-pointer"
                onClick={onClose}>
                x
            </button>
            <nav className={`flex flex-col align-baseline`}>
                <a href="#home" className="hover:text-(--accent-color)">
                    Home
                </a>
                <a href="#about" className="hover:text-(--accent-color)">
                    About Us
                </a>
                <a href="#pricing" className="hover:text-(--accent-color)">
                    Pricing
                </a>
            </nav>
            <div className="">
                <Button text="Sign In" url="/blog" variant="dark"></Button>
            </div>
        </div>
    );
};

export default Sidebar;
