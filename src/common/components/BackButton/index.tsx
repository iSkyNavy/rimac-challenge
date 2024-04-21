import { FC } from "react";
import ArrowBasicIcon from "@assets/icons/arrow-basic.svg";
import styles from "./index.module.scss";

interface Props {
	label?: string;
	theme: "gray" | "blue";
	onClick?: () => void;
}

export const BackButton: FC<Props> = ({ label, theme }) => {
	let themeStyle = "";
	switch (theme) {
		case "blue":
			themeStyle = styles.c_back_button__theme_blue;
			break;
		case "gray":
			themeStyle = styles.c_back_button__theme_gray;
			break;
	}
	return (
		<div role="button" className={`${styles.c_back_button} ${themeStyle}`}>
			<button className={`${styles.c_back_button__button}`}>
				<ArrowBasicIcon />
			</button>
			{label && <span className={styles.c_back_button__label}>{label}</span>}
		</div>
	);
};
