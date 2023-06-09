import { FC } from "react";
import css from "./index.module.css";

import chartsIcon from "../../../assets/sectionsIcons/ico charts.svg";
import dashboardsIcon from "../../../assets/sectionsIcons/ico dashboards.svg";
import researchesIcon from "../../../assets/sectionsIcons/ico researches.svg";
import academyIcon from "../../../assets/sectionsIcons/ico academy.svg";

import Image from "next/image";
import Link from "next/link";

type CardData = {
	icon: string;
	title: string;
	buttonText: string;
	link: string;
	description: string;
};
const cardsData: CardData[] = [
	{
		icon: chartsIcon,
		title: "Charts",
		description: "Our main charts allows you to select the TON ecosystem asset of your interest and customize your own data display settings according to your interests. Manage data and receive important information about the state of the TON network, financial data, and community activity.",
		buttonText: "Go To Charts",
		link: "/charts",
	},
	{
		icon: dashboardsIcon,
		title: "Dashboards",
		description: "Dashboards are a powerful tool that allows you to get an overall understanding of various data, consolidated in one place by topics such as NFT, DNS, DeFi, Jetton, Smart contract, and many others. We are proud to provide our users with access to this tool and want each of you to take advantage of it.",
		buttonText: "Go to Dashboards",
		link: "/dashboards",
	},
	{
		icon: researchesIcon,
		title: "Researches",
		description: "Reports are another way we provide you with comprehensive information about the development of the TON blockchain and ecosystem. Our analytical reports contain information on various metrics and indicators, such as user activity and the development of decentralized applications.",
		buttonText: "Go to Researches",
		link: "/researches",
	},
	{
		icon: academyIcon,
		title: "Academy",
		description: "The Academy is a place where you can find educational materials, including articles, textbooks, and other resources that will help you learn the specifics of the TON blockchain. In our academy, we focus on beginner developers who want to dive into the world of TON and learn the basics of the FunC language and writing TON smart contracts.",
		buttonText: "Go to Academy",
		link: "/academy",
	},
];

type CardProps = {
	icon: string;
	title: string;
	buttonText: string;
	link: string;
	description: string;
};
const Card: FC<CardProps> = ({ title, description, link, icon, buttonText }: CardProps) => (
	<div className={css.card}>
		<Image className={css.cardImage} src={icon} alt="icon" />

		<div className={css.cardContent}>
			<h3 className={css.cardTitle}>
				{title}
			</h3>
			<p className={css.cardDescription}>
				{description}
			</p>
			<Link className={css.cardLink} href={link}>
				{buttonText}
			</Link>
		</div>
	</div>
);

const CtaCards: FC = () => {
	return (
		<section className={css.section}>
			<div className={css.content}>
				<h2 className={css.title}>
					Now available sections:
				</h2>
				<div className={css.cards} >
					{cardsData.map(({ title, description, link, icon, buttonText }) => (
						<Card key={link}
							icon={icon}
							title={title}
							description={description}
							link={link}
							buttonText={buttonText}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default CtaCards;
