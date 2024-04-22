import { MainHomeSection } from "src/modules/Home/sections/MainHomeSection";
import { Footer } from "@components/Footer";
import BlurPinkMobileImg from "@assets/images/blur-pink-mobile.webp";
import BlurPinkImg from "@assets/images/blur-pink.webp";
import BlurTurquoiseMobileImg from "@assets/images/blur-turquoise-mobile.webp";
import BlurTurquoiseImg from "@assets/images/blur-turquoise.webp";
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
