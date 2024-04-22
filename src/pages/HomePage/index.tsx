import { Footer } from "@components/Footer";
import { MainHomeSection } from "src/modules/Home/sections/MainHomeSection";
import BlurPinkMobileImg from "@assets/images/blur-pink-mobile.png";
import BlurPinkImg from "@assets/images/blur-pink.png";
import BlurTurquoiseMobileImg from "@assets/images/blur-turquoise-mobile.png";
import BlurTurquoiseImg from "@assets/images/blur-turquoise.png";

import styles from "./index.module.scss";

const HomePage = () => {
	return (
		<>
			<div className={styles.p_home__blur_pink}>
				<picture>
					<source media="(min-width: 760px)" srcSet={BlurPinkImg} />
					<img
						className={styles.p_home__blur_pink_img}
						src={BlurPinkMobileImg}
						alt="blur-pink-img"
					/>
				</picture>
			</div>
			<div className={styles.p_home__blur_turquoise}>
				<picture>
					<source media="(min-width: 760px)" srcSet={BlurTurquoiseImg} />
					<img
						className={styles.p_home__blur_turquoise_img}
						src={BlurTurquoiseMobileImg}
						alt="blur-turquoise-img"
					/>
				</picture>
			</div>
			<MainHomeSection />
			<Footer />
		</>
	);
};

export default HomePage;
