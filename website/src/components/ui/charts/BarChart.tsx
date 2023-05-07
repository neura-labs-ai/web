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

interface BarChartProps {
	tableData: number[]
}

const BarChart = ({ tableData }: BarChartProps) => {
	const [chartData, setChartData] = useState({
		datasets: [],
	});
	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		setChartData({
			labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
			datasets: [
				{
					label: "API Requests",
					data: tableData,
					borderColor: "rgb(53, 162, 235)",
					backgroundColor: "#f472b6",
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
