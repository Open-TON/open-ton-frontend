import Link from "next/link";
import { FC } from "react";
import css from "./index.module.css";

const Footer: FC = () => {
  return (
    <nav className={css.navigation}>
      <Link href="/">OpenTON 2023</Link>
      <div>
        <Link href="/">Telegram</Link>
        <Link href="/">Twitter</Link>
      </div>
    </nav>
  );
};

export default Footer;
