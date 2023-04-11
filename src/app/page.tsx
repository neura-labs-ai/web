import Image from "next/image";

export default function Home() {
	return (
		<main className="center-and-justify">
			<div className="italic text-6xl">
				<p>
					The <span className="text-teal-500">Code</span> Library
				</p>
			</div>

			<div>
				<p className="code-block">
					A search engine for programers, powered by{" "}
					<p className="text-teal-500 pl-1 pr-1">Artificial Intelligence</p> and
					Amazing Programers all over the world.
				</p>
			</div>

			<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
				<a
					className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
					href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					By{" "}
					<Image
						src="/vercel.svg"
						alt="Vercel Logo"
						className="dark:invert"
						width={100}
						height={24}
						priority
					/>
				</a>
			</div>
		</main>
	);
}
