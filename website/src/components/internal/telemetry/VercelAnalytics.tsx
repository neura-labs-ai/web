"use client";

import { FC } from "react";
import { Analytics } from "@vercel/analytics/react";
import { LOCAL_STORAGE_KEYS } from "@/lib/helpers/constants";

interface VercelAnalyticsProps {}

/** see - https://vercel.com/docs/concepts/analytics/package */
const VercelAnalytics: FC<VercelAnalyticsProps> = ({}) => {
	return (
		<Analytics
			debug={process.env.NODE_ENV === "development"}
			beforeSend={(e) => {
				const url = new URL(e.url);
				if (url.pathname.includes("/api/")) return null; // Don't track API requests

				const tel_enabled = localStorage.getItem(LOCAL_STORAGE_KEYS.TELEMETRY);

				// Only track events if the user has opted in
				if (tel_enabled) {
					const enabled = JSON.parse(tel_enabled) as {
						enabled: boolean;
					};

					if (!enabled.enabled) return null;

					return {
						...e,
						url: url.toString(),
					};
				}

        // todo - remove this
				return {
					...e,
					url: url.toString(),
				};

        // return null;
			}}
		/>
	);
};

export default VercelAnalytics;
