import { Session, User } from "next-auth";
import Image from "next/image";
import { FC } from "react";
import TempNav from "../ui/TempNav";

interface DisplayAccountProps {
	session: Session | null;
	user: User;
}

const DisplayAccount: FC<DisplayAccountProps> = ({ user, session }) => {
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
			<div>
				<div className="code-block">
					<pre>Name: {user.name} (More info soon)</pre>
				</div>
					<p>This data was fetched from our servers not cache...</p>
			</div>
			<br />
			<TempNav session={session} />
		</>
	);
};

export default DisplayAccount;
