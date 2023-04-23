import { NextPage } from "next";
import Head from "next/head";
import Layout from "../core/layouts";
import { HeroSection, SectionsContainer } from "../features/home";

const Home: NextPage = () => {
	return (
		<Layout>
			<Head>
				<title>OpenTON</title>
			</Head>
			<HeroSection />
			<SectionsContainer/>
		</Layout>
	);
};

export default Home;
