import { TypeAnimation } from "react-type-animation";

export default function TypingAnimation() {
	return (
			<TypeAnimation
				sequence={[
					// Same substring at the start will only be typed out once, initially
					"Travel to India",
					1000, // wait 1s before replacing "Mice" with "Hamsters"
					"Travel to South Sudan",
					1000,
					"Travel to USA",
					1000,
					"Travel to Somalia",
					1000,
				]}
				wrapper="span"
				speed={25}
				style={{
					fontSize: "3rem",
					display: "inline-block",
					backgroundImage:
						"linear-gradient(to right, #6A8D9F, #D2B48C)",
					WebkitBackgroundClip: "text",
					color: "transparent",
					backgroundClip: "text",
					WebkitTextFillColor: "transparent",
				}}
				repeat={Infinity}
			/>
	);
}
