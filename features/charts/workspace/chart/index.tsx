import { FC, useLayoutEffect, useRef, useState } from "react";

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";

import { createAxisAndSeries, generateChartData } from "./utils";

import css from "./index.module.css";

const Chart: FC = () => {
	const [isLogScale, setIsLogScale] = useState(false);
	const series1Ref = useRef<am5xy.LineSeries | null>(null);
	const series2Ref = useRef<am5xy.LineSeries | null>(null);
	const xAxisRef = useRef<am5xy.DateAxis<am5xy.AxisRenderer> | null>(null);

	useLayoutEffect(() => {
		const root = am5.Root.new("chart");

		const chart = root.container.children.push(
			am5xy.XYChart.new(root, {
				focusable: true,
			})
		);

		const xAxis = chart.xAxes.push(
			am5xy.DateAxis.new(root, {
				maxDeviation: 0.1,
				groupData: false,
				baseInterval: {
					timeUnit: "day",
					count: 1,
				},
				renderer: am5xy.AxisRendererX.new(root, {}),
				tooltip: am5.Tooltip.new(root, {}),
			})
		);

		const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
			xAxis: xAxis,
			behavior: "zoomX",
		}));
		cursor.lineY.set("visible", false);

		// add scrollbar
		chart.set("scrollbarX", am5.Scrollbar.new(root, {
			orientation: "horizontal",
		}));

		const series1 = createAxisAndSeries(root, chart, xAxis, "value1", false, isLogScale);
		const series2 = createAxisAndSeries(root, chart, xAxis, "value2", true, isLogScale);

		xAxisRef.current = xAxis;
		series1Ref.current = series1;
		series2Ref.current = series2;

		return () => {
			root.dispose();
		};
	}, [isLogScale]);

	useLayoutEffect(() => {
		const data = generateChartData(1000);
		console.log(data);

		xAxisRef?.current?.data.setAll(data);
		series1Ref?.current?.data.setAll(data);
		series2Ref?.current?.data.setAll(data);
	}, [isLogScale]);

	const handleSetLogScale = () => {
		setIsLogScale((prev) => !prev);
	};

	return (
		<>
			<div id="chart" style={{ width: "100%", height: "500px" }} />
			<button onClick={handleSetLogScale}>
				log
			</button>
		</>
	);
};

export default Chart;
