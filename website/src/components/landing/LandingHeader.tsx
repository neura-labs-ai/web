"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import Image from "next/image";
import {
  NAV_LINKS,
  SITE,
  ROOT_SUB_PAGES,
  APP_ICON,
} from "@/lib/helpers/constants";

const navigation = NAV_LINKS;

export default function RootHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const session = useSession().data;

  return (
			<>
				<header className="absolute inset-x-0 top-0 z-50">
					<nav
						className="flex items-center justify-between p-6 lg:px-8"
						aria-label="Global">
						<div className="flex lg:flex-1">
							<a href="/" className="-m-1.5 p-1.5">
								<span className="sr-only">{SITE.NAME}</span>
								<Image
									className="h-8 w-auto w-500"
									src={APP_ICON}
									alt="Logo"
									width={500}
									height={500}
								/>
							</a>
						</div>
						<div className="flex lg:hidden">
							<button
								type="button"
								className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-300"
								onClick={() => setMobileMenuOpen(true)}>
								<span className="sr-only">Open main menu</span>
								<Bars3Icon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						<div className="hidden lg:flex lg:gap-x-12">
							{navigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="text-sm font-semibold leading-6 text-zinc-200">
									{item.name}
								</a>
							))}
						</div>
						<div className="hidden lg:flex lg:flex-1 lg:justify-end">
							{session?.user ? (
								<a
									href={ROOT_SUB_PAGES.DASHBOARD}
									className="text-sm font-semibold leading-6 text-zinc-100">
									Get Started <span aria-hidden="true">&rarr;</span>
								</a>
							) : (
								<a
									href={ROOT_SUB_PAGES.LOGIN}
									className="text-sm font-semibold leading-6 text-zinc-100">
									Login <span aria-hidden="true">&rarr;</span>
								</a>
							)}
						</div>
					</nav>

					{/* Mobile Assets */}
					<Dialog
						as="div"
						className="lg:hidden"
						open={mobileMenuOpen}
						onClose={setMobileMenuOpen}>
						<div className="fixed inset-0 z-50" />
						<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-zinc-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
							<div className="flex items-center justify-between">
								<a href="#" className="-m-1.5 p-1.5">
									<span className="sr-only">{SITE.NAME}</span>
									<Image
										className="h-8 w-auto w-500"
										src={APP_ICON}
										alt=""
										width={500}
										height={500}
									/>
								</a>
								<button
									type="button"
									className="-m-2.5 rounded-md p-2.5 text-zinc-300"
									onClick={() => setMobileMenuOpen(false)}>
									<span className="sr-only">Close menu</span>
									<XMarkIcon className="h-6 w-6" aria-hidden="true" />
								</button>
							</div>
							<div className="mt-6 flow-root">
								<div className="-my-6 divide-y divide-zinc-500">
									<div className="space-y-2 py-6">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-300 hover:bg-pink-400">
												{item.name}
											</a>
										))}
									</div>
									<div className="py-6">
										{session?.user ? (
											<a
												href={ROOT_SUB_PAGES.DASHBOARD}
												className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-zinc-300 hover:bg-pink-400">
												Get Started
											</a>
										) : (
											<a
												href={ROOT_SUB_PAGES.LOGIN}
												className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-zinc-300 hover:bg-pink-400">
												Log in
											</a>
										)}
									</div>
								</div>
							</div>
						</Dialog.Panel>
					</Dialog>
				</header>
			</>
		);
}
