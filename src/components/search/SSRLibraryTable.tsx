import { searchStore } from "@/redux/search";
import { FC } from "react";
import LibraryTable from "./LibraryTable";

interface SSRLibraryTableProps {}

const SSRLibraryTable: FC<SSRLibraryTableProps> = ({}) => {
	return (
		<>
			<LibraryTable libs={searchStore.getState().search.startupLibrary} />
		</>
	);
};

export default SSRLibraryTable;
