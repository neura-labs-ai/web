"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { useSession } from "next-auth/react";
import { FC } from "react";

interface headerProps {}

const Header: FC<headerProps> = ({}) => {
	const session = useSession().data;

	const userName = decodeURI(session?.user?.name!);
	const userImage = session?.user?.image!;

	return (
		<>
			<div className="flex justify-center pt-7 bg-zinc-900 w-full pb-4">
				<Avatar>
					<AvatarImage src={userImage} width={25} height={25} />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<h2 className="pl-4">{userName} Dashboard</h2>
			</div>
		</>
	);
};

export default Header;
