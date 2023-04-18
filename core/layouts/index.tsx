import { PropsWithChildren, ReactNode } from "react";
import clsx from "clsx";

import Footer from "./footer";
import Header from "./header";

import css from "./index.module.css";

import { interFont } from "../../core/fonts";

interface LayoutProps {
	children?: ReactNode | undefined
}
const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
	return (
		<section className={clsx(css.layout, interFont.className)}>
			<header className={css.header}>
				<Header />
			</header>
			<main className={css.main}>
				{children}
			</main>
			<footer className={css.footer}>
				<Footer />
			</footer>
		</section>
	);
};

export default Layout;
