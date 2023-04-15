"use client";

import { FC } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

interface AnalyticsProps {}

const Analytics: FC<AnalyticsProps> = ({}) => {
  return <VercelAnalytics />;
};

export default Analytics;
