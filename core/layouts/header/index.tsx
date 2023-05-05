import { FC } from "react";
import Image from "next/image";
import css from "./index.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

import LogoIcon from "../../../assets/icons/logo.svg";
import HomeIcon from "../../../assets/icons/homeIcon.svg";
import ChartsIcon from "../../../assets/icons/chartsIcon.svg";
import DashboardsIcon from "../../../assets/icons/dashboardsIcon.svg";
import ResearchesIcon from "../../../assets/icons/researchesIcon.svg";
import AcademyIcon from "../../../assets/icons/academyIcon.svg";
import clsx from "clsx";

interface MenuItem {
	title: string;
	link: string;
	icon: string;
}
const menuItems: MenuItem[] = [
	{
		title: "Main",
		link: "/",
		icon: HomeIcon,
	},
	{
		title: "Charts",
		link: "/charts",
		icon: ChartsIcon,
	},
	{
		title: "Dashboards",
		link: "/dashboards",
		icon: DashboardsIcon,
	},

	{
		title: "Researches",
		link: "/researches",
		icon: ResearchesIcon,
	},
	{
		title: "Academy",
		link: "/academy",
		icon: AcademyIcon,
	},
];

const Header: FC = () => {
	const pathname = usePathname();

	return (
		<nav className={css.navigation}>
			<Link href="/" className={css.logo}>
				<Image
					priority
					src={LogoIcon}
					alt="Logo icon, looks like lying paragraph symbol"
				/>
				<span>OpenTON</span>
			</Link>

			<ul className={css.navList}>
				{menuItems.map((item) => (
					<li key={item.link}>
						<Link
							href={item.link}
							className={clsx(
								css.navListItemLink,
								pathname.endsWith(item.link) && css.navListItemLinkActive
							)}
						>
							<Image src={item.icon} alt="icon" />
							<span>{item.title}</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Header;
