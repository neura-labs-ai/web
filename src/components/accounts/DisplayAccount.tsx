import { Session, User } from "next-auth";
import Image from "next/image";
import { FC } from "react";

interface DisplayAccountProps {
	session: Session | null;
	user: User | null;
}

const DisplayAccount: FC<DisplayAccountProps> = ({ user, session }) => {
	const userName = decodeURI(user?.name!);

	return (
		<>
			<Image
				src={session?.user.image!}
				alt={`${userName} account image`}
				width={20}
				height={20}
			/>
			<h1>{userName} Account information</h1>
			<br />
			<div className="code-block">
				<pre>
					Name: {userName ?? "Unknown"} | Role: {user?.roles?.map((r) => r).join(", ") ?? "Unknown"}
				</pre>
			</div>
		</>
	);
};

export default DisplayAccount;
