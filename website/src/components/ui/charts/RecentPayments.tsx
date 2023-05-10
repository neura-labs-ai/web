import { Payment } from "@prisma/client";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

interface RecentPaymentsProps {
	payments: Payment[];
}

const RecentPayments = ({ payments }: RecentPaymentsProps) => {
	return (
		<>
			<div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-zinc-800 overflow-scroll">
				<h1>Recent Payments</h1>
				<ul>
					{payments.length > 0 ? (
						payments.map((p, id) => (
							// @ts-ignore
							<Link href={`/dashboard/payments/${p.subscription_id}`}>
								<li
									key={id}
									className="bg-gray-500 hover:bg-zinc-400 rounded-lg my-3 p-2 flex items-center cursor-pointer">
									<div className="bg-purple-100 rounded-lg p-3">
										<ShoppingBag className="text-black" />
									</div>
									<div className="pl-4">
										<p className="text-gray-800 font-bold">
											{p.credits_purchased} Credits{" "}
										</p>
									</div>
									<p className="lg:flex md:hidden absolute right-6 text-sm">
										{p.subscription_date?.toISOString() ?? "N/A"}
									</p>
								</li>
							</Link>
						))
					) : (
						<li key={0} className="bg-gray-500 rounded-lg my-3 p-2 flex items-center">
							<div className="bg-purple-100 rounded-lg p-3">
								<ShoppingBag className="text-black" />
							</div>
							<div className="pl-4">
								<p className="text-gray-800 font-bold">No recent payments </p>
							</div>
						</li>
					)}
				</ul>
			</div>
		</>
	);
};

export default RecentPayments;
