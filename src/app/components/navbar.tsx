import Link from "next/link";
import FlightIcon from "@mui/icons-material/Flight";
import LoginIcon from '@mui/icons-material/Login';

const linkStyles = "text-text-primary transition duration-500 block p-2 rounded-md hover:bg-[#bfbcbc] flex items-center gap-1";

export default function Navbar() {
	return (
		<nav className="fixed w-full bg-[#e8e5e5] shadow-md z-50 p-2 text-xl">
			<div className="flex items-center">
				<Link href="/" className="ml-4">
					Smart Itinerary
				</Link>
				<div className="flex gap-2 ml-auto mr-4">
						<Link className={linkStyles} href="/destinations">
                            <FlightIcon />
							Destinations
						</Link>
					<Link className={linkStyles} href="/signup">
                        <LoginIcon />
						Log in / Sign up
					</Link>
				</div>
			</div>
		</nav>
	);
}
