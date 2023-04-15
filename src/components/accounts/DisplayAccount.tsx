import { Session, User } from "next-auth";
import Image from "next/image";
import { FC } from "react";

interface DisplayAccountProps {
	session: Session | null;
	user: User | null;
}

const DisplayAccount: FC<DisplayAccountProps> = ({ user, session }) => {
	return (
		<>
			<br />
			<Image
				src={session?.user.image!}
				alt={`${session?.user.name} account image`}
				width={20}
				height={20}
			/>
			<h1>{user?.name} Account information</h1>
			<br />
			<div className="code-block">
				<pre>Name: {user?.name ?? "Uknown"} | Role: {user?.role ?? "Unknown"}</pre>
			</div>
		</>
	);
};

export default DisplayAccount;
