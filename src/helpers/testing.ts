import { prisma } from "@/server/db";

import libs from "../mock_libs";

/** Create mock data in our db. by default its disabled unless enabled. */
export async function test_lib_populate(enabled: boolean = false) {
	if (!enabled) return;
	for (const lib of libs) {
		const dbLib = await prisma.library.findUnique({
			where: {
				name: lib.name,
			},
		});
		if (!dbLib) {
			await prisma.library.create({
				data: {
					name: lib.name,
					description: lib.description,
					language: lib.language,
					tags: {
						set: lib.tags,
					},
					imageIcon: lib.imageIcon,
					homepage: lib.homepage,
					repository: lib.repository,
					openSource: lib.openSource,
					stars: lib.stars,
					owner: {
						create: {
							name: encodeURI(lib.owner.name),
							email: lib.owner.email,
							role: "TEST",
							image: "https://cdn.discordapp.com/embed/avatars/0.png",
						},
					},
				},
			});
		}
	}
	console.log("Populated database with mock data");
}
