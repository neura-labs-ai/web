import { FC } from "react";

interface ContentBodyProps {
	children?: React.ReactNode;
}

const ContentBody: FC<ContentBodyProps> = ({ children }) => {
	return (
		<>
			<div className="mt-5 flex flex-col items-center justify-center w-full h-full">
				{children}
			</div>
		</>
	);
};

export default ContentBody;
