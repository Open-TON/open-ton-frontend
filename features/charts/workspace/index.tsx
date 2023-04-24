import dynamic from "next/dynamic";
import { FC } from "react";

import css from "./index.module.css";

const Chart = dynamic(() => import("./chart"), { ssr: false });

const Workspace: FC = () => {
	return (
		<section>
			<aside className={css.controlsArea}>
				controlsArea
			</aside>
			<div className={css.chartArea}>
				<h1>TITLE</h1>
				<menu>Top menu</menu>
				<output>
					<Chart />
				</output>
				<menu>Bot menu</menu>
			</div>
		</section>
	);
};

export default Workspace;
