type Prop = {
    text: string;
};

const BubbleMessage = ({text}: Prop) => {

    const light =
		`bg-(--accent-color)`;

	const dark =
		`bg-(--primary-color)`;

    return (
        <span className={`rounded-2xl absolute px-8 py-2 right-32 top-15 bg-(--accent-color) text-white z-10 transition font-bold hover:scale-105`}>
            {text}
        </span>
    );
};

export default BubbleMessage;
