import SpinnerLoader from "@/components/ui/loaders/SpinnerLoader";
import { FC } from "react";

interface loadingProps {}

const loading: FC<loadingProps> = ({}) => {
	return (
		<>
			<SpinnerLoader />
		</>
	);
};

export default loading;
