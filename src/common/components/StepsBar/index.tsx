import { FC } from "react";
import styles from "./index.module.scss";
import LineIcon from "@assets/icons/line.svg";

interface Props {
	steps: Array<{
		index: number;
		label: string;
	}>;
	currentIndex: number;
}

export const StepsBar: FC<Props> = ({ steps, currentIndex }) => {
	return (
		<div className={styles.c_steps_bar__wrapper}>
			{steps.map(step => (
				<>
					<div className={styles.c_steps_bar}>
						<button
							className={`${styles.c_steps_bar__index} ${
								currentIndex === step.index
									? styles.c_steps_bar__index_active
									: styles.c_steps_bar__index_disabled
							}`}
						>
							{step.index}
						</button>
						<span
							className={`${styles.c_steps_bar__label} ${
								currentIndex === step.index
									? styles.c_steps_bar__label_active
									: styles.c_steps_bar__label_disabled
							}`}
						>
							{step.label}
						</span>
					</div>
					{step.index != steps.length && <LineIcon />}
				</>
			))}
		</div>
	);
};
