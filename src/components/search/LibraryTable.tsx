import { JsonSearchData } from "@/lib/data";
import Link from "next/link";
import { FC } from "react";

interface LibraryTableProps {
	libs: JsonSearchData;
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
								<Link href={`/search/${lib.id}`} target={"_blank"}>
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
