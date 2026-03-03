"use client";
import Box from "@mui/material/Box";
import Link from "next/link";
import TypingAnimation from "./components/typeanimation";

export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center h-screen w-screen">
			<TypingAnimation />
			<Box
				component="div"
				sx={{
					position: "relative",
					height: "540px",
					width: "1020px",
					boxShadow: 10,
					borderRadius: 5,
					"&::before": {
						content: '""',
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundImage: `url(https://www.lonestar.edu/images/internationalTravel.jpg)`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						filter: "brightness(0.7)",
						borderRadius: 5,
					},
				}}
			>
				<Box
					component="div"
					sx={{
						position: "relative",
						textAlign: "center",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						fontSize: "2rem",
						height: "100%",
						width: "100%",
						flexDirection: "column",
						color: "#edece1",
					}}
				>
					<Link
						className="bg-primary border-transparent border-4 text-[#edece1] p-2 rounded-2xl transition duration-500 hover:border-white"
						href="/destinations">
						Discover your next adventure
					</Link>
				</Box>
			</Box>
		</div>
	);
}
