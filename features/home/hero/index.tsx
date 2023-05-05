import { FC } from "react";
import clsx from "clsx";

import css from "./index.module.css";

const Icon = () => (
	<svg width="64" height="64" viewBox="0 0 64 64" fill="none">
		<circle cx="32" cy="32" r="32" fill="url(#gradiend)" />
		<path fillRule="evenodd" clipRule="evenodd" d="M20.7763 17.4547L43.3991 17.4545C44.1995 17.4545 44.9993 17.5721 45.8351 17.9617C46.837 18.4288 47.3683 19.1649 47.7405 19.7093C47.7695 19.7516 47.7965 19.7953 47.8216 19.8399C48.2592 20.619 48.4848 21.4601 48.4848 22.3649C48.4848 23.2246 48.2803 24.1613 47.8216 24.9776C47.8173 24.9855 47.8128 24.9932 47.8084 25.001L33.5156 49.5528C33.2004 50.0943 32.6203 50.4264 31.9938 50.4242C31.3673 50.4221 30.7895 50.0857 30.4782 49.542L16.4478 25.0426C16.4438 25.036 16.4398 25.0293 16.4357 25.0226C16.1147 24.4935 15.6181 23.6752 15.5312 22.6193C15.4514 21.6482 15.6697 20.6753 16.1576 19.8317C16.6455 18.988 17.38 18.3135 18.2635 17.9007C19.2108 17.458 20.1708 17.4547 20.7763 17.4547ZM30.2462 20.962H20.7763C20.1541 20.962 19.9152 21.0003 19.7483 21.0784C19.5174 21.1861 19.3235 21.3634 19.1938 21.5876C19.0642 21.8119 19.0055 22.0718 19.0269 22.3319C19.0391 22.481 19.0999 22.6516 19.4584 23.2429C19.4659 23.2553 19.4733 23.2678 19.4805 23.2804L30.2462 42.0793V20.962ZM33.7537 20.962V42.1722L44.7688 23.2506C44.8931 23.0247 44.9774 22.6982 44.9774 22.3649C44.9774 22.0945 44.9214 21.8597 44.796 21.6177C44.6645 21.4286 44.5844 21.3284 44.5174 21.2599C44.46 21.2012 44.4157 21.1698 44.3532 21.1407C44.0928 21.0193 43.8263 20.962 43.3991 20.962H33.7537Z" fill="white" />
		<defs>
			<linearGradient id="gradiend" x1="32" y1="0" x2="32" y2="64" gradientUnits="userSpaceOnUse">
				<stop stop-color="#5CBFF0" />
				<stop offset="1" stop-color="#0495FE" />
			</linearGradient>
		</defs>
	</svg>
);

const priceElements = [
	{
		title: "Toncoin Price",
		price: "2.26",
		percentage: "0.28%",
	},
	{
		title: "Price Change",
		price: "+0.0003952",
		percentage: "0.03%",
	},
	{
		title: "Trading volume",
		price: "22,795,258",
		percentage: "0.03%",
	},

	{
		title: "Market Cap",
		price: "2,756,898,728",
		percentage: "0.03%",
	},
	{
		title: "24h Low / 24h High",
		priceLow: "2.23",
		priceHigh: "2.28",
	},

];

const Tags = () => (
	<div className={css.tags}>
		<h3 className={css.tag}>
			Welcome to the OpenTON
		</h3>
		<h3 className={css.tag}>
			TON ecosystem
		</h3>
	</div>
);

const HeroSection: FC = () => {
	return (
		<section className={css.section}>
			<div className={css.content}>
				<div className={css.textSide}>
					<Tags />
					<h1 className={css.title}>
						Analytical platform that provides
						access to the most up-to-date
						data on the
						<span className={css.titleIcon}>
							<Icon />
						</span>
						<span className={css.highlight}>TON system</span>
					</h1>

					<h2 className={css.subTitle}>
						We aim to be an indispensable tool for those who want to stay
						up-to-date on the latest events in the blockchain world and
						use this information to	make important decisions.
					</h2>

					<div className={css.buttons}>
						<button>Open analytical tools</button>
						<button>Read our researches</button>
					</div>
				</div>

				<div className={css.cardSide}>
					<ul className={css.list}>
						{
							priceElements.map((element, index) => (
								<li key={index} className={css.listItem}>
									<h3 className={css.listItemTitle}>
										{`${element.title}:`}
									</h3>
									<span className={css.listItemValue}>
										{element.price
											? `$${element.price}`
											: `$${element.priceLow || 0} / $${element.priceHigh || 0}`
										}
									</span>

									{element.percentage &&
										<div className={clsx(css.badge, index === 0 && css.badgeHighlighted)}>
											{element.percentage}
										</div>
									}
								</li>
							))
						}
					</ul>
				</div>
			</div>
		</section >
	);
};

export default HeroSection;
