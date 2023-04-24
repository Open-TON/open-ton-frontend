import { FC, useEffect } from "react";

import css from "./index.module.css";

const Workspace: FC = () => {

	useEffect(() => {
		console.log("check");
	}, []);

	return (
		<section>
			<aside className={css.controlsArea}>
				controlsArea
			</aside>
			<div id="chart" className={css.chartArea}>
				<h1>TITLE</h1>
				<menu>Top menu</menu>
				<output>
					chart
				</output>
				<menu>Bot menu</menu>
			</div>
		</section>
	);
};

export default Workspace;
