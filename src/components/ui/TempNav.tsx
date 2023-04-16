"use client"

import { getServerSession, Session } from "next-auth";
import Link from "next/link";
import Button from "./Button";

interface TempNavProps {
  session: Session | null;
}

const TempNav = ({ session }: TempNavProps) => {
  return (
			<>
				<div className="flex flex-row justify-center w-full">
					<div className="space-x-2">
						<Button>
							<Link href={"/"}>Root</Link>
						</Button>
						<Button>
							<Link href={"/home"}>Home</Link>
						</Button>
						<Button>
							<Link href={`/account/${session?.user.name}`}>Account</Link>
						</Button>
						<Button>
							<Link href={`/account/${session?.user.name}/settings`}>
								Account Settings
							</Link>
						</Button>
						<Button>
							<Link href={"/search"}>Search a Library</Link>
						</Button>
					</div>
				</div>
			</>
		);
};

export default TempNav;
