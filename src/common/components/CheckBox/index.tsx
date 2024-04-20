import { FC, InputHTMLAttributes } from "react";
import styles from "./index.module.scss";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

interface Props extends InputProps {
	label: string;
	name: string;
	className?: string;
}

export const CheckBox: FC<Props> = ({ label, className, name, checked, ...props }) => {
	return (
		<div className={`${className} ${styles.c_checkbox__wrapper}`}>
			<input
				checked={checked}
				className={styles.c_checkbox}
				type="checkbox"
				name={name}
				{...props}
			/>
			<label className={styles.c_checkbox__label} htmlFor={name}>
				{label}
			</label>
		</div>
	);
};
