type Props = {
    text: string;
    url: string;
};

const Button = ({ text, url }: Props) => {
    return (
        <a href={url}>
            <button className="bg-(--accent-color) hover:bg-(--accent-color-light) hover:text-(--primary-color) px-4 py-1 rounded transition cursor-pointer">
                {text}
            </button>
        </a>
    );
};

export default Button;
