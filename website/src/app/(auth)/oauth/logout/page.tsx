"use client";

import { signOut } from "next-auth/react";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
	return (
		<>
			<div>
				<button
					onClick={() =>
						signOut({
							callbackUrl: "/",
						})
					}>
					Sign out
				</button>
			</div>
		</>
	);
};

export default page;
