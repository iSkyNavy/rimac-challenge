import { useNavigate } from "react-router-dom";
import { useWindowSize } from "src/hooks/useWindowSize";
import { publicRoutesPath } from "@routes/routes";
import PhoneIcon from "@assets/icons/phone.svg";
import LogoRedIcon from "@assets/icons/logo-red.svg";
import { BREAKPOINTS } from "@constants/breakpoints";
import styles from "./index.module.scss";

export const Header = () => {
	const navigate = useNavigate();
	const { width } = useWindowSize();
	const isMobile = width < BREAKPOINTS.SM;
	return (
		<header className={styles.c_header}>
			<div className={`i-container ${styles.c_header__wrapper}`}>
				<div
					className={styles.c_header__icon_wrapper}
					onClick={() => navigate(publicRoutesPath.HomePage)}
				>
					<LogoRedIcon />
				</div>
				<div className={styles.c_header__details}>
					{!isMobile && (
						<span className={styles.c_header__details_buy_text}>
							¡Compra por este medio!
						</span>
					)}
					<div className={styles.c_header__details_icon}>
						<PhoneIcon />
					</div>
					<span className={styles.c_header__details_phone_text}>(01) 411 6001</span>
				</div>
			</div>
		</header>
	);
};
