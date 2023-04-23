import { FC } from "react";

import css from "./index.module.css";

import TonIcon from "../../../assets/icons/blueTonLogo.svg";
import Image from "next/image";

const priceElements = [
	{
		title: "Price Change:",
		price: "+$0.0003952",
		percentage: "0.03%",
	},
	{
		title: "Trading volume:",
		price: "$22,795,258",
		percentage: "0.03%",
	},

	{
		title: "Market Cap:",
		price: "$2,756,898,728",
		percentage: "0.03%",
	},
	{
		title: "24 h Low / 24 h High",
		price: "$2.23 / $2.28",
	},

];

const HeroSection: FC = () => {
	return (
		<section className={css.section}>
			<div>
				<div className={css.mainPageDecoratos}>
					<div>
						<span className={css.decoratorPoint} />
            Welcome to the OpenTON main page
					</div>
					<div>
						<span className={css.decoratorPoint} />
            TON ecosystem
					</div>
				</div>
				<div className={css.block1}>
					<div>
            Analytical platform that provides
						<br />
            access to the most up-to-date
						<br />
            data on the
						<span>
							<Image src={TonIcon} alt="tonIcon" /> TON system
						</span>
					</div>
					<div className={css.aimText}>
						<p>
              We aim to be an indispensable tool for those who want to stay
              up-to-date on the latest
							<br /> events in the blockchain world and use this information to
              make important decisions.
						</p>
					</div>

					<div className={css.buttons}>
						<button>Open analytical tools</button>
						<button>Read our researches</button>
					</div>
				</div>
			</div>
			<div className={css.priceBlock}>

				<div>
					<div className={css.priceElement}>
						<div>
              Toncoin<br/>
              Price:
						</div>
						<div className={css.tonPrice}>
              $2.26
						</div>
						<div>
                0.28%
						</div>
					</div>
					<div className={css.priceSpacer} />
					{
						priceElements.map((element,index)=> (<div key={index}>
							<div className={css.priceElement}>
								<div>
									{element.title}
								</div>
								<div className={css.price}>
									{element.price}
								</div>
							
								<div className={element.percentage ? "" : css.emptyPrice}>
									{element.percentage?.valueOf() || ""}
								</div>
								
							</div>
							{ index !== priceElements.length-1 &&
							<div className={css.priceSpacer}/>}
						</div>)
						)}
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
