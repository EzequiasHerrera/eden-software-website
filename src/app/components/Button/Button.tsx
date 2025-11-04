import styles from "./Button.module.css";

type Props = {
	text: string;
	url: string;
	variant?: "light" | "dark";
};

const Button = ({ text, url, variant = "light" }: Props) => {
	const baseClasses = "px-4 py-2 rounded transition cursor-pointer";

	const lightClasses =
		`bg-(--accent-color) hover:bg-(--accent-color-light) hover:text-(--primary-color) text-white ${styles.btn_shadow}`;

	const darkClasses =
		`bg-(--primary-color) hover:bg-(--accent-color) hover:text-white text-(--accent-color-light) ${styles.btn_shadow}`;

	const finalClasses =
		variant === "dark"
			? `${baseClasses} ${darkClasses}`
			: `${baseClasses} ${lightClasses}`;

	return (
		<a
			href={url}
			className="transition duration-200 ease-in-out rounded hover:shadow-[0_0_40px_9px_rgba(168,129,254,0.9)] max-h-min"
		>
			<button className={finalClasses}>{text}</button>
		</a>
	);
};

export default Button;
