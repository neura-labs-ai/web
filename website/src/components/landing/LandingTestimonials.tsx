import { APP_ICON } from "@/lib/helpers/constants";
import Image from "next/image";

export default function RootTestimonials() {
  return (
			<>
				<section className="relative isolate overflow-hidden bg-zinc-950 px-6 py-24 sm:py-32 lg:px-8">
					<div className="absolute inset-0 -z-10 opacity-20" />
					<div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] ring-1 ring-zinc-950 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
					<div className="mx-auto max-w-2xl lg:max-w-4xl">
						<Image
							className="mx-auto h-12"
							src={APP_ICON}
							alt="App Icon"
							width={500}
							height={500}
						/>
						<figure className="mt-10">
							<blockquote className="text-center text-xl font-semibold leading-8 text-zinc-300 sm:text-2xl sm:leading-9">
								<p>
									“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita
									voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum
									sed rerum et corporis.”
								</p>
							</blockquote>
							<figcaption className="mt-10">
								<Image
									className="mx-auto h-10 w-10 rounded-full"
									src="https://avatars.githubusercontent.com/u/43446907?v=4"
									alt=""
									width={150}
									height={150}
								/>
								<div className="mt-4 flex items-center justify-center space-x-3 text-base">
									<div className="font-semibold text-zinc-300">Example Customer</div>
									<svg
										viewBox="0 0 2 2"
										width={3}
										height={3}
										aria-hidden="true"
										className="fill-gray-900">
										<circle cx={1} cy={1} r={1} />
									</svg>
									<div className="text-zinc-400">Pro Member</div>
								</div>
							</figcaption>
						</figure>
					</div>
				</section>
			</>
		);
}
