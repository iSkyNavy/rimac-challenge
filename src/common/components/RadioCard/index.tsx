import { FC, ReactNode } from "react";
import { Card } from "@components/Card";
import styles from "./index.module.scss";

export interface Option {
	id: number | string;
	Icon: ReactNode;
	title: string;
	description: string;
}

interface Props {
	options: Array<Option>;
	className?: string;
	classNameItem?: string;
	onChange: (option: Option) => void | Promise<void>;
}

export const RadioCard: FC<Props> = ({ options, className, classNameItem, onChange }) => {
	const handleOnChange = async (option: Option) => {
		if (onChange instanceof Promise) await onChange(option);
		else onChange(option);
	};
	return (
		<div className={className}>
			{options.map(({ Icon, description, title, id }, index) => (
				<Card key={index} className={`${styles.c_radio_card__custom} ${classNameItem}`}>
					<label className={styles.c_radio_card__radio}>
						<input
							type="radio"
							name="plan"
							value={id}
							onChange={() => handleOnChange({ Icon, description, title, id })}
						/>
						<span className={styles.c_radio_card__marked}></span>
					</label>
					<div className={styles.c_radio_card__header}>
						{Icon} <h5>{title}</h5>
					</div>
					<p className={styles.c_radio_card__description}>{description}</p>
				</Card>
			))}
		</div>
	);
};
