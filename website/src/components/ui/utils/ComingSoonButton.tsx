'use client'

import Button from "@/components/ui/Button";
import { useToast } from "@/hooks/toast";

export default function ToastSimple() {
	const { toast } = useToast();

	return (
		<Button
            className="text-2xl p-8 m-5"
			onClick={() => {
				toast({
					description: "This page is under construction! 👷 🚧",
				});
			}}>
			⚒️
		</Button>
	);
}
