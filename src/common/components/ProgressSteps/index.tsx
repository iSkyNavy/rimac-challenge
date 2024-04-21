import { FC } from "react";
import { BackButton } from "@components/BackButton";
import styles from "./index.module.scss";

interface Props {
	total: number;
	current: number;
}
export const ProgressSteps: FC<Props> = ({ current, total }) => {
	return (
		<div className={styles.c_progress_steps}>
			<BackButton theme="gray" />
			Paso {current} de {total}
			<div className={styles.c_progress_steps__line}>
				<div className={styles.c_progress_steps__current}></div>
			</div>
		</div>
	);
};
