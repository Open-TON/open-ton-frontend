import Link from "next/link";
import { FC } from "react";
import css from "./index.module.css";

const Footer: FC = () => {
	return (
		<nav className={css.navigation}>
			<Link href="/">kek</Link>
		</nav>
	);
};

export default Footer;
