import "../styles/globals.css";
import "../styles/nprogress.css";

import type { AppProps } from "next/app";
import NProgress from "nprogress";
import Router from "next/router";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function App({ Component, pageProps }: AppProps) {
	return (
		<Component {...pageProps} />
	);
}

export default App;
