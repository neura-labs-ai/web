"use client"

import { FC } from "react";
import Welcome from "../content/welcome.mdx";
import DocsBody from "@/components/ui/DocsBody";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
	return (
		<>
			<DocsBody>
				<Welcome />
			</DocsBody>
		</>
	);
};

export default page;