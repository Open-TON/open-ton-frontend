import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="description" content="OpenTON" />

				<meta property="og:title" content="OpenTON" />
				<meta property="og:description" content="OpenTON" />
				<meta property="og:image" content="https://assets.website-files.com/5bd30a7057f745d0c688837d/5de724f865d48a0544daa0bc_ogimage-home.png" />
				<meta property="og:type" content="website" />

				<meta property="twitter:title" content="OpenTON" />
				<meta property="twitter:description" content="OpenTON" />
				<meta property="twitter:image" content="https://assets.website-files.com/5bd30a7057f745d0c688837d/5de724f865d48a0544daa0bc_ogimage-home.png" />
				<meta name="twitter:card" content="summary_large_image" />

				<meta name="theme-color" content="#ffffff" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
				<meta name="msapplication-config" content="/browserconfig.xml" />

				<link rel="shortcut icon" type="image/x-icon" href="/favicons/favicon.ico" />
				<link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />

				<link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
				<link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
				<link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
				<link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
				<link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
				<link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
				<link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
				<link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />

				<link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png" />

				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff0000" />

				<link rel="manifest" href="/manifest.json" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
