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
import { useSession } from "next-auth/react";
import { getChartStatistics } from "./utils";

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

const BarChart = ({}) => {
	const session = useSession();

	const [chartData, setChartData] = useState({
		datasets: [],
	});
	const [chartOptions, setChartOptions] = useState({});
	const [tableData, setTableData] = useState([0, 0, 0, 0, 0, 0, 0]);

	useEffect(() => {
		getChartStatistics(session?.data?.user?.email!).then((data) => {
			setTableData(data);
		});

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
