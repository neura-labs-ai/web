"use client"

import { signIn } from "next-auth/react";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
	return (
		<>
			<div>
				<button
					onClick={() =>
						signIn("github", {
							callbackUrl: "/dashboard",
						})
					}>
					Sign out
				</button>
			</div>
		</>
	);
};

export default page;
