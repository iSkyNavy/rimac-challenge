import { FC, InputHTMLAttributes } from "react";
import styles from "./index.module.scss";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

interface Props extends InputProps {
	label?: string;
	borderRadius?: "full" | "left" | "right";
}

export const Input: FC<Props> = ({ label, value, borderRadius = "full", ...props }) => {
	const hasValue = value;
	let borderRadiusStyles = "";
	switch (borderRadius) {
		case "full":
			borderRadiusStyles = styles.c_input__border_full;
			break;
		case "left":
			borderRadiusStyles = styles.c_input__border_left;
			break;
		case "right":
			borderRadiusStyles = styles.c_input__border_right;
			break;
		default:
			break;
	}
	return (
		<div
			className={`${styles.c_input} ${
				hasValue && styles.c_input__has_value
			} ${borderRadiusStyles}`}
		>
			<input className={styles.c_input__text} {...props} />
			{label && <label className={`${styles.c_input__label}`}>{label}</label>}
		</div>
	);
};
