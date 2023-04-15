import { Library } from "@prisma/client";
import Link from "next/link";
import { FC } from "react";

interface LibraryTableProps {
	libs: Library[];
}

const LibraryTable: FC<LibraryTableProps> = ({ libs }) => {
	return (
		<>
			<table>
				<thead>
					<tr>
						<th>Available library&apos;s</th>
					</tr>
				</thead>
				<tbody>
					{libs.length ? (
						libs.map((lib) => (
							<tr key={lib.id}>
								{/* Ignore the route types for these custom links */}
								<Link href={lib.homepage! as any} target={"_blank"}>
									<td>{lib.name}</td>
								</Link>
							</tr>
						))
					) : (
						<tr>
							<td>No library&apos;s found</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
};

export default LibraryTable;
