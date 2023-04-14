import { Session, User } from "next-auth";
import Image from "next/image";
import { FC } from "react";
import TempNav from "../ui/TempNav";

interface DisplayAccountProps {
	session: Session | null;
	user: User | null;
}

const DisplayAccount: FC<DisplayAccountProps> = ({ user, session }) => {
	console.log("user", user);
	return (
		<>
			<Image
				src={session?.user.image!}
				alt={`${session?.user.name} account image`}
				width={20}
				height={20}
			/>
			<h1>{user?.name} Account information</h1>
			<br />
			<div className="code-block">
				<pre>Name: {user?.name ?? "@Error"} (More info soon)</pre>
			</div>
			<br />
			<TempNav session={session} />
		</>
	);
};

export default DisplayAccount;
