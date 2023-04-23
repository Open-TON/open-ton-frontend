import { FC } from "react";
import css from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

type Props = {
    icon: any,
    title: string,
    button: string,
    link?: string,
    description: string
};

const SectionCard: FC<Props> = (props: Props) => {

	return 	<div className={css.section}>
		<div className={css.sectionIcon}>
			<Image src={props.icon} alt="icon"/>
		</div>
		<div className={css.sectionContent}>
			<div>{props.title}</div>
			<div className={css.sectionDescription}>{props.description}</div>
			<div>
				<Link href={props.icon}>{props.button}</Link>
			</div>
		</div>
	</div>;
};

export default SectionCard;