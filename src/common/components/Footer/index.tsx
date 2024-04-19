import LogoWhiteIcon from "@assets/icons/logo-white.svg";
import LogoWhiteStackedIcon from "@assets/icons/logo-white-stacked.svg";
import { useWindowSize } from "src/hooks/useWindowSize";
import styles from "./index.module.scss";

export const Footer = () => {
	const { width } = useWindowSize();
	const isMobile = width < 768;
	return (
		<footer className={styles.c_footer}>
			<div className={`i-container ${styles.c_footer__wrapper}`}>
				<div>{!isMobile ? <LogoWhiteIcon /> : <LogoWhiteStackedIcon />}</div>
				<hr className={styles.c_footer__separator} />
				<span className={styles.c_footer__text}>© 2023 RIMAC Seguros y Reaseguros.</span>
			</div>
		</footer>
	);
};
