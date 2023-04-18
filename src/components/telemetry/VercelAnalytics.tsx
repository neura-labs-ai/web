"use client";

import { FC } from "react";
import { Analytics } from "@vercel/analytics/react";
import { LOCAL_STORAGE_KEYS } from "@/helpers/constants";

interface VercelAnalyticsProps {}

const VercelAnalytics: FC<VercelAnalyticsProps> = ({}) => {
  return (
    <Analytics
      debug={process.env.NODE_ENV === "development"}
      beforeSend={(e) => {
        // The user opts out of telemetry
        if (localStorage.getItem(LOCAL_STORAGE_KEYS.TELEMETRY)) {
          return null;
        }

        const url = new URL(e.url);

        url.searchParams.delete("name"); // api/search?name=foo

        return {
          ...e,
          url: url.toString(),
        };
      }}
    />
  );
};

export default VercelAnalytics;
