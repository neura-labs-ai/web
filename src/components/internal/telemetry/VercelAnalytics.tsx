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
        // Only track events if the user has opted in
        if (localStorage.getItem(LOCAL_STORAGE_KEYS.TELEMETRY)) {
          const url = new URL(e.url);

          if (url.pathname.includes("/api/")) return null; // Don't track API requests

          return {
            ...e,
            url: url.toString(),
          };
        }

        return null;
      }}
    />
  );
};

export default VercelAnalytics;
