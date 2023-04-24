import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";

export function generateChartData(value: number) {
	const data = [];

	for (let i = 0; i < 100; i++) {
		const newDate = new Date();
		newDate.setDate(newDate.getDate() + i);

		const value1 = value - Math.round(
			((Math.random() < 0.5 ? 1 : -1) * Math.random() * value) / 2
		);

		const value2 = value + Math.round(
			((Math.random() < 0.5 ? 1 : -1) * Math.random() * value) / 2
		);

		data.push({
			date: newDate.getTime(),
			value1: value1,
			value2: value2,
		});
	}

	return data;
}

export function createAxisAndSeries(
	root: am5.Root,
	chart: am5xy.XYChart,
	xAxis: am5xy.DateAxis<am5xy.AxisRenderer>,
	valueYField: string,
	opposite: boolean,
	isLogScale: boolean
) {
	const yRenderer = am5xy.AxisRendererY.new(root, {
		opposite: opposite,
	});

	const yAxis = chart.yAxes.push(
		am5xy.ValueAxis.new(root, {
			maxDeviation: 1,
			logarithmic: isLogScale,
			renderer: yRenderer,
		})
	);

	if (chart.yAxes.indexOf(yAxis) > 0) {
		yAxis.set("syncWithAxis", chart.yAxes.getIndex(0) as never);
	}

	const series = chart.series.push(
		am5xy.LineSeries.new(root, {
			xAxis: xAxis,
			yAxis: yAxis,
			valueYField: valueYField,
			valueXField: "date",
			tooltip: am5.Tooltip.new(root, {
				pointerOrientation: "horizontal",
				labelText: "{valueY}",
			}),
		})
	);

	series.strokes.template.setAll({ strokeWidth: 2 });

	yRenderer.grid.template.set("strokeOpacity", 0.05);
	yRenderer.labels.template.set("fill", series.get("fill"));
	yRenderer.setAll({
		stroke: series.get("fill"),
		strokeOpacity: 1,
		opacity: 1,
	});

	return series;
}
