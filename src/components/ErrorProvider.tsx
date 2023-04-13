"use client";

import { FC } from "react";
import { Toaster } from "react-hot-toast";

interface ProvidersProps {
	children: React.ReactNode;
}

// Handles Errors on the UI
const ErrorProvider: FC<ProvidersProps> = ({ children }) => {
	return (
		<>
			<Toaster position="top-center" reverseOrder={false} />
			{children}
		</>
	);
};

export default ErrorProvider;
