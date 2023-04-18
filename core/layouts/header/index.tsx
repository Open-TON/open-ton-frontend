import { FC } from "react";

import css from "./index.module.css";
import Link from "next/link";

const Header: FC = () => {
	return (
		<nav className={css.navigation}>
			<Link href="/" className={css.logo}>
				Logo
			</Link>

			<Link href="/" className={css.title}>
				OpenTON
			</Link>

			<ul className={css.navList}>
				{[].map((item) => (
					<li key={item}>item</li>
				))}
			</ul>
		</nav>
	);
};

export default Header;
