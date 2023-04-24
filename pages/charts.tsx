import { NextPage } from "next";
import Head from "next/head";
import Layout from "../core/layouts";
import { Workspace } from "../features/charts";

const Charts: NextPage = () => {
	return (
		<Layout>
			<Head>
				<title>OpenTON Charts</title>
			</Head>
			<Workspace />
		</Layout>
	);
};

export default Charts;
