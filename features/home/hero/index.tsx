import { FC } from "react";

import css from "./index.module.css";

import TonIcon from "../../../assets/icons/blueTonLogo.svg";
import Image from "next/image";

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
            access to the most up-to-date data
            <br />
            on the
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
    </section>
  );
};

export default HeroSection;
