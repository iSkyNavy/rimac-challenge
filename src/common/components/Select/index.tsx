import { FC, SelectHTMLAttributes } from "react";
import ArrowBasic from "@assets/icons/arrow-basic.svg";
import styles from "./index.module.scss";

interface OpionProps {
	value: string | number;
	label: string;
	enabled: boolean;
}

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

interface Props extends SelectProps {
	options: OpionProps[];
	borderRadius?: "full" | "left" | "right";
	className?: string;
}
export const Select: FC<Props> = ({
	options,
	borderRadius = "full",
	className,
	value,
	...props
}) => {
	let borderRadiusStyles = "";
	switch (borderRadius) {
		case "full":
			borderRadiusStyles = styles.c_select__border_full;
			break;
		case "left":
			borderRadiusStyles = styles.c_select__border_left;
			break;
		case "right":
			borderRadiusStyles = styles.c_select__border_right;
			break;
		default:
			break;
	}
	return (
		<div className={styles.c_select__wrapper}>
			<select
				className={`${styles.c_select} ${borderRadiusStyles} ${className}`}
				value={value}
				{...props}
			>
				{options.map((option, index) => (
					<option disabled={!option.enabled} value={option.value} key={index}>
						{option.label}
					</option>
				))}
			</select>
			<div className={styles.c_select__icon_wrapper}>
				<ArrowBasic />
			</div>
		</div>
	);
};
