// todo - fetch this data. This is just a placeholder
const stats = [
	{ id: 1, name: "A resource developers all around the world", value: "7000+" },
	{ id: 3, name: "Thousands of monthly active users", value: "1,000+" },

	// Use react query to fetch from https://api.github.com/repos/ThatGuyJamal/Audio-Lion/The-Code-Library/stargazers
	{ id: 2, name: "Stars On GitHub", value: "4,000+" },
];

export default function RootStats() {
  return (
			<>
				<div className="bg-zinc-950 py-24 sm:py-32">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl">
							Global Analytics
						</h1>
					</div>
					<div className="mx-auto max-w-7xl px-6 lg:px-8 pt-52">
						<dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
							{stats.map((stat) => (
								<div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
									<dt className="text-base leading-7 text-zinc-400">{stat.name}</dt>
									<dd className="order-first text-3xl font-semibold tracking-tight text-zinc-300 sm:text-5xl">
										{stat.value}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</>
		);
}
