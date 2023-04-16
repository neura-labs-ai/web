import { TEAM_MEMBERS } from "@/helpers/constants";
import Image from "next/image";

const people = TEAM_MEMBERS;

export default function RootTeam() {
	return (
		<>
			<div className="bg-zinc-950 py-24 sm:py-32">
				<div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
					<div className="max-w-2xl">
						<h2 className="text-3xl font-bold tracking-tight text-teal-500 sm:text-4xl">
							Meet our leadership
						</h2>
						<p className="mt-6 text-lg leading-8 text-zinc-300">
							Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
							elementum enim vitae ullamcorper suspendisse.
						</p>
					</div>
					<ul
						role="list"
						className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
						{people.map((person) => (
							<li key={person.name}>
								<div className="flex items-center gap-x-6">
									<Image
										className="h-16 w-16 rounded-full"
										src={person.imageUrl}
										alt=""
										width={150}
										height={150}
									/>
									<div>
										<h3 className="text-base font-semibold leading-7 tracking-tight text-zinc-300">
											{person.name}
										</h3>
										<p className="text-sm font-semibold leading-6 text-pink-400">
											{person.role}
										</p>
										<a className="text-black" href={person.github} target="_blank">
											GitHub
										</a>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
