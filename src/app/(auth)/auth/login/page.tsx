"use client";

import Button from "@/components/ui/Button";
import { FC, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import { isAuthenticated } from "@/lib/utils";
import { redirect } from "next/navigation";
import Image from "next/image";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const session = useSession();

	if (isAuthenticated(session.data)) {
		redirect("/home");
	}

	async function loginWithGitHub() {
		setIsLoading(true);
		try {
			await signIn("github").then(() => {
				toast.success("You have successfully logged in.");
			});
		} catch (error: any) {
			// display error message to user
			toast.error("There was a problem logging in.");
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<>
			<main>
				<div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
					<div className="w-full flex flex-col items-center max-w-md space-y-8">
						<div className="flex flex-col items-center gap-8">
							<Image
								src={"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"}
								alt={"Logo"}
								width={150}
								height={150}
							/>
						</div>

						<Button
							isLoading={isLoading}
							type="button"
							className="max-w-sm mx-auto w-full"
							onClick={loginWithGitHub}>
							{isLoading ? null : (
								<div className="pr-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
									</svg>
								</div>
							)}
							<h2 className="text-teal-500">Login with GitHub</h2>
						</Button>
					</div>
				</div>
			</main>
		</>
	);
};

export default Login;
