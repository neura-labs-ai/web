"use client";

import React, { useState, useEffect, FC } from "react";
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
    Colors,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
    Colors
);

interface BarChartProps {}

const BarChart: FC<BarChartProps> = ({}) => {
	const [chartData, setChartData] = useState({
		datasets: [],
	});

	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		setChartData({
			labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
			datasets: [
				{
					label: "Good Sales",
					data: [13127, 27201, 19490, 17938, 24032, 17842, 23005],
					borderColor: "rgb(53, 162, 235)",
					backgroundColor: "rgb(34 197 94)",
					color: "#666",
				},
				{
					label: "Bad Sales",
					data: [9127, 24201, 1990, 14938, 20182, 17042, 20575],
					borderColor: "rgb(53, 162, 235)",
					backgroundColor: "rgb(239 68 68)",
					color: "#666",
				},
			],
		} as any);
		setChartOptions({
			plugins: {
				legend: {
					position: "top",
				},
				title: {
					display: true,
					text: "Daily Revenue",
				},
			},
			maintainAspectRatio: false,
			responsive: true,
		});
	}, []);

	return (
		<>
			<div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-zinc-800">
				<Bar data={chartData} options={chartOptions} />
			</div>
		</>
	);
};

export default BarChart;
