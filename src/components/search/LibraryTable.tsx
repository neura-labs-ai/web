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
						<th>Active library's</th>
					</tr>
				</thead>
				<tbody>
					{libs.map((lib) => (
						<tr key={lib.id}>
							<Link href={lib.homepage!} target={"_blank"}>
								<td>{lib.name}</td>
							</Link>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default LibraryTable;
