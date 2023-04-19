import { FC } from "react";
import Image from "next/image";
import css from "./index.module.css";
import Link from "next/link";

import HeaderIcon from "../../../assets/icons/headerIcon.svg";
import HomeIcon from "../../../assets/icons/homeIcon.svg";
import ChartsIcon from "../../../assets/icons/chartsIcon.svg";
import DashboardsIcon from "../../../assets/icons/dashboardsIcon.svg";
import ResearchesIcon from "../../../assets/icons/researchesIcon.svg";
import AcademyIcon from "../../../assets/icons/academyIcon.svg";
import LangIcon from "../../../assets/icons/langIcon.svg";

interface MenuItem {
  title: string;
  link: string;
  icon: any;
  selected?: boolean;
}

const menuItems: MenuItem[] = [
	{
		title: "Main",
		link: "/",
		icon: HomeIcon,
		selected: true,
	},
	{
		title: "Charts",
		link: "/",
		icon: ChartsIcon,
	},
	{
		title: "Dashboards",
		link: "/",
		icon: DashboardsIcon,
	},

	{
		title: "Researches",
		link: "/",
		icon: ResearchesIcon,
	},
	{
		title: "Academy",
		link: "/",
		icon: AcademyIcon,
	},
];

const Header: FC = () => {
	return (
		<nav className={css.navigation}>
			<Link href="/" className={css.logo}>
				<Image priority src={HeaderIcon} alt="icon" />
			</Link>

			<ul className={css.navList}>
				{menuItems.map((item, index) => (
					<Link key={index} href={item.link}>
						<div className={`${item.selected && css.selectedLink}`}>
							<Image src={item.icon} alt="icon" />
							<li>{item.title}</li>
						</div>
					</Link>
				))}
			</ul>
			<Link href="/" className={css.title}>
				<span>EN</span>
				<Image src={LangIcon} alt="langIcon" />
			</Link>
		</nav>
	);
};

export default Header;
