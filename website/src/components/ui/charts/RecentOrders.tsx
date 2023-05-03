import data from "@/lib/data";
import { ShoppingBag } from "lucide-react";
import { FC } from "react";

interface RecentOrdersProps {}

const RecentOrders: FC<RecentOrdersProps> = ({}) => {
	return (
		<>
			<div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-zinc-800 overflow-scroll">
				<h1>Recent Orders</h1>
				<ul>
					{data.map((order, id) => (
						<li
							key={id}
							className="bg-gray-500 hover:bg-zinc-400 rounded-lg my-3 p-2 flex items-center cursor-pointer">
							<div className="bg-purple-100 rounded-lg p-3">
								<ShoppingBag className="text-black" />
							</div>
							<div className="pl-4">
								<p className="text-gray-800 font-bold">${order.total}</p>
								<p className="text-gray-300 text-sm">{order.name.first}</p>
							</div>
							<p className="lg:flex md:hidden absolute right-6 text-sm">
								{order.date}
							</p>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default RecentOrders;
